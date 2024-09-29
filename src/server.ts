import { Account } from "./domain/entities/Account";
import { AccountPosition } from "./domain/entities/AccountPosition";
import { AccountSemesterData } from "./domain/entities/AccountSemesterData";
import { Address } from "./domain/entities/Address";
import { Depositor } from "./domain/entities/Depositor";
import { Email } from "./domain/entities/Email";
import { IdentificationDocument } from "./domain/entities/IdentificationDocument";
import { Phone } from "./domain/entities/Phone";
import { ValidateAccountCharacteristics } from "./frameworks/formatters/ValidateAccountCharacteristics";
import { ValidateAccountNature } from "./frameworks/formatters/ValidateAccountNature";
import { ValidateCoin } from "./frameworks/formatters/ValidateCoin";
import { ValidateInclusionExclusion } from "./frameworks/formatters/ValidateInclusionExclusion";
import { MSSQLDatabase } from "./frameworks/service/databaseConnection"
import { SemesterGuaranteeFund } from "./semesterDataGuaranteeFund"

import fs from "fs"

/* async function getDataFromDatabase() {
  const db = MSSQLDatabase.getInstance();
  const pool = await db.getPool();

  try {
    const result = await pool.request()
      //.input('input_parameter', sql.Int, 12345)
      .query(`
      SELECT TOP (1000)
    GFCUN,
    AAZEAD1,
    AAZMPHN,
    AAZHPHN,
    SVNA2,
    SVNA3,
    AAWIDD,
    AAZIDN,
    CONTA,
    CARACTER,
    C5ATD,
    TITULARES,
    C4CTD,
    MOEDA,
    BGC066,
    EMAIL2,
    TELEF2,
    TALTERN2,
    MORADA2,
    PROVIN2,
    TIPODOC2,
    BGC067,
    INCLUSAO,
    MEDIA,
    SALDO2,
    INDISPON,
    JUROSBRUT,
    JUROSLIQ,
    DATA
FROM CRIA_FGD2024S2;
        
      `);

    let resultData: SemesterGuaranteeFund[] = []
    let resultAccountSemesterData: AccountSemesterData[] = []
    for (let i = 0; i < result.recordset.length; i++) {
      const data = result.recordset[i]

      const semesterData = new SemesterGuaranteeFund("")

      semesterData.name = (data.GFCUN+"").trim();
      semesterData.email = data.AAZEAD1.trim();
      semesterData.primaryPhoneNumber = data.AAZHPHN.trim();
      semesterData.alternativePhoneNumber2 = data.AAZHPHN.trim();
      semesterData.address = data.SVNA2.trim()
      semesterData.province = data.SVNA3.trim();
      semesterData.documentationType = data.AAWIDD.trim()
      semesterData.documentationIdentificationNumber = data.AAZIDN.trim()
      semesterData.accountNumber = data.CONTA.trim()
      semesterData.accountCharacteristic = data.CARACTER.trim()
      semesterData.accountTypeDepositor = data.C5ATD.trim()
      semesterData.holders = data.TITULARES.trim()
      semesterData.accountInstitutionType = data.C4CTD.trim()
      semesterData.coinType = data.MOEDA.trim()
      semesterData.name2 = data.BGC066.trim()
      semesterData.email2 = data.EMAIL2.trim()
      semesterData.phoneNumber2 = data.TELEF2.trim();
      semesterData.alternativePhoneNumber2 = data.TALTERN2.trim();
      semesterData.address2 = data.MORADA2.trim();
      semesterData.province2 = data.PROVIN2.trim();
      semesterData.documentationType2 = data.TIPODOC2.trim()
      semesterData.documentationIdentificationNumber2 = data.BGC067.trim();
      semesterData.inclusionOrExclusion = data.INCLUSAO.trim();
      semesterData.averageAmountBalance = data.MEDIA.trim()
      semesterData.amountBalance = data.SALDO2.trim();
      semesterData.unavailableBalance = data.INDISPON.trim()
      semesterData.grossInterest = data.JUROSBRUT.trim()
      semesterData.netInterest = data.JUROSLIQ.trim()

      resultData.push(semesterData)

      const item = formatAccountSemesterData(semesterData)
      resultAccountSemesterData.push(item)
    }
    //fs.writeFileSync("data.json", JSON.stringify(resultData));
  } catch (err) {
    console.error('SQL error', err);
  } finally {
    pool.close(); // Fechar a conexão após uso
  }
} */

async function formatAccountSemesterData(semesterData: SemesterGuaranteeFund): AccountSemesterData {
  const reference = semesterData.accountNumber.split("-")[1]

  const phones: Phone[] = []
  if (semesterData.primaryPhoneNumber) {
    phones.push({
      isMain: true,
      value: semesterData.primaryPhoneNumber
    })
  }
  if (semesterData.secondaryPhoneNumber) {
    phones.push({
      isMain: false,
      value: semesterData.secondaryPhoneNumber
    })
  }
  if (semesterData.phoneNumber2) {
    phones.push({
      isMain: false,
      value: semesterData.phoneNumber2
    })
  }
  if (semesterData.alternativePhoneNumber2) {
    phones.push({
      isMain: false,
      value: semesterData.alternativePhoneNumber2
    })
  }

  const emails: Email[] = []
  if (semesterData.email) {
    emails.push({
      value: semesterData.email
    })
  }
  if (semesterData.email) {
    emails.push({
      value: semesterData.email2
    })
  }

  const addresses: Address[] = []
  if (semesterData.province) {
    addresses.push({
      provinceCode: semesterData.province,
      value: semesterData.address
    })
  }
  if (semesterData.province) {
    addresses.push({
      provinceCode: semesterData.province2,
      value: semesterData.address2
    })
  }

  const documentIdentifications: IdentificationDocument[] = []
  if (semesterData.documentationType) {
    documentIdentifications.push({
      type: semesterData.documentationType,
      valueNumber: semesterData.documentationIdentificationNumber
    })
  }
  if (semesterData.documentationType2) {
    documentIdentifications.push({
      type: semesterData.documentationType2,
      valueNumber: semesterData.documentationIdentificationNumber2
    })
  }

  const depositor = new Depositor(
    phones,
    emails,
    addresses,
    documentIdentifications,
    {
      name: semesterData.name,
      reference: "",
      typeDepositor: semesterData.accountTypeDepositor
    }
  )

  const account = new Account(reference, [], {
    accountCharacteristic: ValidateAccountCharacteristics.getDescription(semesterData.accountCharacteristic),
    accountNature: ValidateAccountNature.getDescription(""),
    accountNumber: semesterData.accountNumber,
    coinCode: ValidateCoin.getDescription(semesterData.coinType),
    inclusionExclusionCode: ValidateInclusionExclusion.getDescription(semesterData.inclusionOrExclusion)
  })

  const accountPosition = new AccountPosition(
    reference,
    semesterData.accountNumber,
    {
      accountBalance: semesterData.amountBalance,
      averageAccountBalance: semesterData.averageAmountBalance,
      grossInterest: semesterData.grossInterest,
      netInterest: semesterData.netInterest,
      periodDate: new Date(),
      unavailableBalance: semesterData.unavailableBalance
    }
  )

  const data = new AccountSemesterData(depositor, account, accountPosition)

  return data
}

/* getDataFromDatabase() */