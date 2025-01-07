// import { Formio } from "formiojs";
import PanelWithStepEditDisplay from "./editForm/customPanel.edit.display.js";

const PanelEditForm = Formio.Components.components.panel.editForm;

export default function (...extend) {
  return PanelEditForm(
    [
      {
        key: "display",
        components: PanelWithStepEditDisplay,
      },
    ],
    ...extend
  );
}
