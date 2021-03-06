import { useEffect, useState } from "react";
import { Relatorio } from "../../../@types/Relatorio";
import { ApiService } from "../../../services/ApiService";

export function useReport(){
  const [listReport, setListReport] = useState<Relatorio[]>([]);

  useEffect(() => {
    ApiService.get('adocoes').then((response) => {
      setListReport(response.data);
    })
  }, [])

  return {
    listReport
  }
}