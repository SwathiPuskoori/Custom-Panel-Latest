import customEditForm from "./customPanel.form";
import "./PanelWithStep.css";
const Panel = Formio.Components.components.panel;

Formio.Templates.defaultTemplates["myTemplate"] = {
  form: function (ctx) {
    let __t,
      __p = "",
      __j = Array.prototype.join;
    function print() {
      __p += __j.call(arguments, "");
    }
    __p += '<div class="mb-2 card border panel-with-step">\n  ';
    if (
      !ctx.component.hideLabel ||
      ctx.builder ||
      ctx.component.collapsible ||
      ctx.component.tooltip
    ) {
      __p +=
        '\n  <div class="custom-panel-header ' +
        ((__t = ctx.transform("class", "bg-" + ctx.component.theme)) == null
          ? ""
          : __t) +
        '"\n    ';
      if (ctx.component.collapsible) {
        __p += '\n    tabindex="0"\n    ';
      }
      __p +=
        '\n    role="button"\n    aria-expanded="' +
        ((__t = ctx.component.collapsible ? !ctx.collapsed : true) == false
          ? ""
          : __t) +
        '"\n    aria-controls="' +
        ((__t = ctx.instance.id) == null ? "" : __t) +
        "-" +
        ((__t = ctx.component.key) == null ? "" : __t) +
        '"\n    ref="header"\n  >\n    ';
      __p +=
        '<div class="step-label d-flex align-items-center ' +
        (ctx.component.collapsible ? "justify-content-between" : "") +
        '">\n' +
        '  <div class="step-number">' +
        ((__t = ctx.component.stepNumber) == null ? "" : __t) +
        "</div>\n" +
        '  <span class="ml-2">' +
        ((__t = ctx.component.title || "Step Panel") == null ? "" : __t) +
        "</span>\n";
      if (ctx.component.collapsible) {
        __p +=
          '  <div class="toggle-icon" style="transform: ' +
          (ctx.collapsed ? "rotate(180deg)" : "rotate(0deg)") +
          ';">\n' +
          "    ▼\n" +
          "  </div>\n";
      }
      __p += "</div>\n";
      __p += "\n  </div>\n";
    }
    __p += "\n  ";
    if (!ctx.collapsed || ctx.builder) {
      __p +=
        '\n  <div class="card-body" ref="' +
        ((__t = ctx.nestedKey) == null ? "" : __t) +
        '" id="' +
        ((__t = ctx.instance.id) == null ? "" : __t) +
        "-" +
        ((__t = ctx.component.key) == null ? "" : __t) +
        '">\n    ' +
        ((__t = ctx.children) == null ? "" : __t) +
        "\n  </div>\n  ";
    }
    __p += "\n</div>\n";
    return __p;
  },
};

export default class CustomPanel extends Panel {
  static editForm = customEditForm;

  static schema(...extend) {
    return Panel.schema({
      type: "customPanel",
      label: "Custom Panel",
      key: "customPanel",
      stepNumber: "1",
      title: "Custom Panel",
      theme: "default",
      breadcrumb: "default",
      components: [],
      clearOnHide: false,
      input: false,
      tableView: false,
      persistent: false,
      ...extend,
    });
  }

  static get builderInfo() {
    return {
      title: "Custom Panel",
      icon: "list-alt",
      group: "basic",
      documentation: "/userguide/form-building/layout-components#panel",
      showPreview: false,
      weight: 0,
      schema: CustomPanel.schema(),
    };
  }

  get templateName() {
    return "myTemplate";
  }

  constructor(...args) {
    super(...args);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.validatePanel = this.validatePanel.bind(this);
    this.focusOnComponent = this.focusOnComponent.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.showErrors = this.showErrors.bind(this);
  }

  handleNextClick() {
    const errors = this.validatePanel();
    if (errors.length > 0) {
      this.setAlert("danger", errors, { classes: "alert alert-danger" });
      const firstInvalidComponent = errors[0].component;
      if (firstInvalidComponent) {
        this.focusOnComponent(firstInvalidComponent.key);
      }
      return false;
    } else {
      this.emit("next");
      return true;
    }
  }



  validatePanel() {
    const errors = [];
    const checkComponentValidity = (components) => {
      components.forEach((component) => {
        if (component.columns) {
          component.columns.forEach((column) => {
            if (column.components) {
              column.components.forEach((nestedComponent) => {
                checkComponentValidity([nestedComponent]);
              });
            }
          });
        }
        if (!component.columns && !component.components) {
          const field = this.getComponent(component.key);
          if (field) {
            if (!field.checkValidity()) {
              errors.push({
                message: `${component.label || component.key} is required.`,
                component: field,
                componentKey: component.key,
              });
              if (field.element) {
                field.element.classList.add("formio-error-wrapper");
              }
            } else {
              if (field.element) {
                field.element.classList.remove("formio-error-wrapper");
              }
            }
          }
        }
      });
    };
    if (this.component && this.component.components) {
      checkComponentValidity(this.component.components);
    }
    return errors;
  }

  focusOnComponent(key) {
    if (key) {
      const component = this.getComponent(key);
      if (component) {
        component.focus();
      }
    }
  }

  setAlert(type, message, options) {
    if (!type && this.submitted) {
      if (this.alert) {
        if (this.refs.errorRef && this.refs.errorRef.length) {
          this.refs.errorRef.forEach((el) => {
            this.removeEventListener(el, "click");
            this.removeEventListener(el, "keypress");
          });
        }
        this.removeChild(this.alert);
        this.alert = null;
      }
      return;
    }
    if (this.options.noAlerts) {
      if (!message) {
        this.emit("error", false);
      }
      return;
    }
    if (this.alert) {
      try {
        if (this.refs.errorRef && this.refs.errorRef.length) {
          this.refs.errorRef.forEach((el) => {
            this.removeEventListener(el, "click");
            this.removeEventListener(el, "keypress");
          });
        }
        this.removeChild(this.alert);
        this.alert = null;
      } catch (err) {}
    }
    if (message) {
      if (!Array.isArray(message)) {
        if (typeof message === "string") {
          message = [{ message: message, componentKey: null }];
        } else if (typeof message === "object" && message !== null) {
          message = Object.keys(message).map((key) => ({
            message: message[key],
            componentKey: key,
          }));
        } else {
          console.error("Invalid message format passed to setAlert.");
          return;
        }
      }
      const attrs = {
        class: (options && options.classes) || `alert alert-${type}`,
        id: `error-list-${this.id}`,
      };
      const errorList = message
        .map((err) => {
          return `
      <li>
          <span data-component-key="${
            err.componentKey || "no-key"
          }" ref="errorRef" tabindex="0" role="link">
              ${err.message}
          </span>
      </li>
    `;
        })
        .join("");
      const alertHTML = `
        <p>Please fix the following errors before submitting.</p>
        <ul>
            ${errorList}
        </ul>
      `;
      const templateOptions = {
        message: alertHTML,
        attrs: attrs,
        type,
      };
      this.alert = utils.convertStringToHTMLElement(
        this.renderTemplate("alert", templateOptions),
        `#${attrs.id}`
      );
    }
    if (!this.alert) {
      return;
    }
    this.loadRefs(this.alert, { errorRef: "multiple" });
    const errorRefs = Array.from(this.refs.errorRef || []);
    if (errorRefs.length > 0) {
      errorRefs.forEach((el) => {
        this.addEventListener(el, "click", (e) => {
          const key = e.currentTarget.dataset.componentKey;
          this.focusOnComponent(key);
        });
        this.addEventListener(el, "keydown", (e) => {
          if (e.keyCode === 13) {
            e.preventDefault();
            const key = e.currentTarget.dataset.componentKey;
            this.focusOnComponent(key);
          }
        });
      });
    }
    this.prepend(this.alert);
  }

  showErrors(errors, triggerEvent) {
    this.loading = false;
    if (!Array.isArray(errors)) {
      errors = [errors];
    }
    errors = _.union(errors, this.errors);
    errors = errors.concat(this.customErrors).filter((err) => !!err);
    if (!errors.length) {
      this.setAlert(false);
      return;
    }
    errors.forEach((err) => {
      const { components = [] } = err;
      if (err.component) {
        components.push(err.component);
      }
      if (err.path) {
        components.push(err.path);
      }
      components.forEach((path) => {
        const originalPath = Array.isArray(path)
          ? utils.getStringFromComponentPath(path)
          : path;
        const component = this.getComponent(path, _.identity, originalPath);
        if (err.fromServer) {
          if (component.serverErrors) {
            component.serverErrors.push(err);
          } else {
            component.serverErrors = [err];
          }
        }
        const componentsList = _.compact(
          Array.isArray(component) ? component : [component]
        );
        componentsList.forEach((component) =>
          component.setCustomValidity(err.message, true)
        );
      });
    });
    const displayedErrors = [];
    errors.forEach(({ message, component, context, fromServer }, index) => {
      const keyOrPath =
        component?.key ||
        context?.path ||
        (err.context?.component && err.context?.component.key) ||
        (err.fromServer && err.path);
      const formattedKeyOrPath = keyOrPath
        ? utils.getStringFromComponentPath(keyOrPath)
        : "";
      displayedErrors.push({
        message: unescapeHTML(message),
        keyOrPath: formattedKeyOrPath,
      });
    });
    const errorsList = this.renderTemplate("errorsList", {
      errors: displayedErrors,
    });
    this.setAlert("danger", errorsList);
    if (triggerEvent) {
      this.emit("error", errors);
    }
    return errors;
  }
}
