return webResource.path("insert/posicao")
  .type(javax.ws.rs.core.MediaType.APPLICATION_JSON)
  .post(responseType, requestEntity);