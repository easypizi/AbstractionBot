modules.define(
  "table__row",
  ["i-bem-dom", "jquery", "button", "icon"],
  function(provide, bemDom, $, Button, Icon) {
    provide(
      bemDom.declElem("table", "row", {
        onSetMod: {
          js: {
            inited: function() {
              this.Visibilator = this.findChildBlock({
                block: Button,
                mods: { togglable: "check" }
              });
              this.visibilityIcon = this.Visibilator.findChildBlock(Icon);
              this.Visibilator._domEvents().on("click", () => {
                let data = {
                  numId: this.params.linkId,
                  isVisible: this.Visibilator.hasMod("checked") ? 1 : 0
                };
                this._changeVisibility(data);
              });
            }
          }
        },
        _changeVisibility: function(object) {
          $.ajax({
            async: true,
            url: "/api/changeVisibility",
            crossDomain: true,
            method: "POST",
            data: {
              objects: object
            }
          }).done(response => {
            if (response.status === true) {
              this.visibilityIcon.setMod(
                "symbol",
                response.isVisible > 0 ? "eye" : "hide"
              );
            }
          });
        }
      })
    );
  }
);
