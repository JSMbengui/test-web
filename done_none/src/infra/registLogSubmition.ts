        StatusSemestre status = new StatusSemestre();
status.setNumeroConta(new FGDSemestre(numeroConta));
status.setDateSend(new Date());
status.setMessages(respostaPosicao);
status.setSenderType(senderType);
status.setDataPeriodo(dataPeriodo);

statusJpaController.edit(status);

System.err.println("Salvo");