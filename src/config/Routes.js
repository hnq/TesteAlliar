import { namespace, resources } from "@system/Router";

namespace("v1", (resources) => {


  resources("/exames", "v1/ExameController", { is_private: false });
  resources("/laboratorios", "v1/LaboratorioController", { is_private: false });
  resources("/laboratorioexames", "v1/LaboratorioExameController", { is_private: false });
});




resources("/exames", "v1/ExameController", { is_private: false });
resources("/laboratorios", "v1/LaboratorioController", { is_private: false });
resources("/laboratorioexames", "v1/LaboratorioExameController", { is_private: false });
