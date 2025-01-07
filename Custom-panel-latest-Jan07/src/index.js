// import { Formio } from "formiojs";
import CustomPanel from "./customPanel/customPanel";

Formio.use([
  {
    components: {
      customPanel: CustomPanel,
    },
  },
]);

// Formio.builder(document.getElementById("builder"), {}, {}).then(() => {});

// Formio.createForm(
//   document.getElementById("formio"),
//   {
//     components: [],
//   },
//   {}
// );
