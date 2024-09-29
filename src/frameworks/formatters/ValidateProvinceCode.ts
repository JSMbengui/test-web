export class ValidateProvinceCode {
  public static getDescription(line1: string, line2: string): string {
    line1 = line1.trim().toUpperCase();
    line2 = line2.trim().toUpperCase();

    if (line1.includes("CABINDA") || line2.includes("CABINDA")) {
      return "01";
    } else if (
      line1.includes("ZAÍRE") || line2.includes("ZAÍRE") ||
      line1.includes("SOYO") || line2.includes("SOYO")
    ) {
      return "02";
    } else if (line1.includes("UÍGE") || line2.includes("UÍGE")) {
      return "03";
    } else if (line1.includes("BENGO") || line2.includes("BENGO")) {
      return "04";
    } else if (
      line1.includes("LUANDA") || line2.includes("LUANDA") ||
      line1.includes("MAIANGA") || line2.includes("MAIANGA") ||
      line1.includes("INGOMBOTA") || line2.includes("INGOMBOTA") ||
      line1.includes("PRENDA") || line2.includes("PRENDA") ||
      line1.includes("SAMBA") || line2.includes("SAMBA") ||
      line1.includes("VIANA") || line2.includes("VIANA") ||
      line1.includes("RANGEL") || line2.includes("RANGEL") ||
      line1.includes("CAZENGA") || line2.includes("CAZENGA") ||
      line1.includes("CACUACO") || line2.includes("CACUACO") ||
      line1.includes("KILAMBA KIAXI") || line2.includes("KILAMBA KIAXI") ||
      line1.includes("SAMBIZANGA") || line2.includes("SAMBIZANGA") ||
      line1.includes("KWANZA SUL") || line2.includes("KWANZA SUL") ||
      line1.includes("PROJECTO NOVA VIDA") || line2.includes("PROJECTO NOVA VIDA") ||
      line1.includes("MORRO BENTO") || line2.includes("MORRO BENTO") ||
      line1.includes("GOLF") || line2.includes("GOLF") ||
      line1.includes("AVª DO PATRIOTA RUA LANDANA") || line2.includes("AVª DO PATRIOTA RUA LANDANA") ||
      line1.includes("BAIRRO NELITO SOARES") || line2.includes("BAIRRO NELITO SOARES") ||
      line1.includes("TALA HADY") || line2.includes("TALA HADY") ||
      line1.includes("AVENIDA 21 DE JANEIRO") || line2.includes("AVENIDA 21 DE JANEIRO") ||
      line1.includes("NEVES BENDINHA") || line2.includes("NEVES BENDINHA") ||
      line1.includes("RUA EMILIO MBINDI") || line2.includes("RUA EMILIO MBINDI") ||
      line1.includes("HOJI YA HENDA") || line2.includes("HOJI YA HENDA") ||
      line1.includes("PALANCA") || line2.includes("PALANCA") ||
      line1.includes("SAMBINZANGA") || line2.includes("SAMBINZANGA") ||
      line1.includes("CIDADE ALTA") || line2.includes("CIDADE ALTA") ||
      line1.includes("MARÇAL") || line2.includes("MARÇAL") ||
      line1.includes("BAIRRO ALVALADE") || line2.includes("BAIRRO ALVALADE") ||
      line1.includes("AVENIDA 4 DE FEVEREIRO") || line2.includes("AVENIDA 4 DE FEVEREIRO") ||
      line1.includes("VILA ALICE") || line2.includes("VILA ALICE") ||
      line1.includes("CDTE VALODIA") || line2.includes("CDTE VALODIA") ||
      line1.includes("COMANDANTE VALODIA") || line2.includes("COMANDANTE VALODIA") ||
      line1.includes("MARCAL") || line2.includes("MARCAL") ||
      line1.includes("BENFICA") || line2.includes("BENFICA") ||
      line1.includes("MACULUSSO") || line2.includes("MACULUSSO") ||
      line1.includes("CDTTE GIKA") || line2.includes("CDTTE GIKA") ||
      line1.includes("COMANDANTE GIKA") || line2.includes("COMANDANTE GIKA") ||
      line1.includes("COQUEIROS") || line2.includes("COQUEIROS")
    ) {
      return "05";
    } else if (
      line1.includes("CUANZA NORTE") || line2.includes("CUANZA NORTE") ||
      line1.includes("KWANZA NORTE") || line2.includes("KWANZA NORTE")
    ) {
      return "06";
    } else if (
      line1.includes("CUANZA SUL") || line2.includes("CUANZA SUL") ||
      line1.includes("KWANZA SUL") || line2.includes("KWANZA SUL") ||
      line1.includes("SUMBE") || line2.includes("SUMBE") ||
      line1.includes("KUANZA-SUL") || line2.includes("KUANZA-SUL") ||
      line1.includes("PORTO AMBOIM") || line2.includes("PORTO AMBOIM")
    ) {
      return "07";
    } else if (
      line1.includes("MALANGE") || line2.includes("MALANGE") ||
      line1.includes("MALANJE") || line2.includes("MALANJE") ||
      line1.includes("RITONDO") || line2.includes("RITONDO")
    ) {
      return "08";
    } else if (
      line1.includes("LUNDA NORTE") || line2.includes("LUNDA NORTE") ||
      line1.includes("KUANGO") || line2.includes("KUANGO")
    ) {
      return "09";
    } else if (
      line1.includes("LUNDA SUL") || line2.includes("LUNDA SUL") ||
      line1.includes("MUCONDA") || line2.includes("MUCONDA") ||
      line1.includes("ZORRO") || line2.includes("ZORRO") ||
      line1.includes("DALA") || line2.includes("DALA")
    ) {
      return "10";
    } else if (
      line1.includes("MOXICO") || line2.includes("MOXICO") ||
      line1.includes("BAIRRO SANTA ROSA") || line2.includes("BAIRRO SANTA ROSA") ||
      line1.includes("SANGONDO") || line2.includes("SANGONDO") ||
      /B.*KUENHA/.test(line1) || /B.*KUENHA/.test(line2) ||
      /L[UW]ENA/.test(line1) || /L[UW]ENA/.test(line2)
    ) {
      return "11";
    } else if (
      line1.includes("BIÉ") || line2.includes("BIÉ") ||
      line1.includes("NHAREA") || line2.includes("NHAREA") ||
      /[SC]HITE[NM]BO/.test(line1) || /[SC]HITE[NM]BO/.test(line2) ||
      /[KC]UEMBA/.test(line1) || /[KC]UEMBA/.test(line2)
    ) {
      return "12";
    } else if (
      line1.includes("HUAMBO") || line2.includes("HUAMBO") ||
      line1.includes("BAILUNDO") || line2.includes("BAILUNDO") ||
      line1.includes("CACHIUNGO") || line2.includes("CACHIUNGO") ||
      line1.includes("MUNGO") || line2.includes("MUNGO") ||
      line1.includes("LONGONJO") || line2.includes("LONGONJO") ||
      /CIDADE.*BAIXA/.test(line1) || /CIDADE.*BAIXA/.test(line2) ||
      /[KC]A[AÁ]LA/.test(line1) || /[KC]A[AÁ]LA/.test(line2)
    ) {
      return "13";
    } else if (
      line1.includes("BENGUELA") || line2.includes("BENGUELA") ||
      line1.includes("DOMBE GRANDE") || line2.includes("DOMBE GRANDE") ||
      line1.includes("GANDA") || line2.includes("GANDA") ||
      /B.*CALOMANGA/.test(line1) || /B.*CALOMANGA/.test(line2) ||
      /BA.*FARTA/.test(line1) || /BA.*FARTA/.test(line2) ||
      /BAIA.*FARTA/.test(line1) || /BAIA.*FARTA/.test(line2)
    ) {
      return "14";
    } else if (
      line1.includes("NAMIBE") || line2.includes("NAMIBE") ||
      line1.includes("CHINGO") || line2.includes("CHINGO") ||
      /B.*5.*BRIL/.test(line1) || /B.*5.*BRIL/.test(line2) ||
      /T[ÔO]MB[WU]A/.test(line1) || /T[ÔO]MB[WU]A/.test(line2)
    ) {
      return "15";
    } else if (
      line1.includes("HUILA") || line2.includes("HUILA") ||
      line1.includes("BULA MATAD") || line2.includes("BULA MATAD")
    ) {
      return "16";
    } else if (
      line1.includes("CUNENE") || line2.includes("CUNENE") ||
      line1.includes("NAMACUNDE") || line2.includes("NAMACUNDE") ||
      line1.includes("KWANHAMA") || line2.includes("KWANHAMA") ||
      line1.includes("CUANHAMA") || line2.includes("CUANHAMA")
    ) {
      return "17";
    } else if (
      line1.includes("CUANDO-CUBANGO") || line2.includes("CUANDO-CUBANGO") ||
      line1.includes("CUANAVALE") || line2.includes("CUANAVALE")
    ) {
      return "18";
    }

    return "";
  }
}
