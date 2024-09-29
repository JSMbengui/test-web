import { GetResumeSubmission } from "./infra/getResumeSubmittion";
import { API_CONFIG } from "./service/config";

const periodDate = `${API_CONFIG.PERIOD_DATE.year}-${API_CONFIG.PERIOD_DATE.month}-${API_CONFIG.PERIOD_DATE.day}`

GetResumeSubmission.execute(`${periodDate}`)