modules.define("page-gallery", ["i-bem-dom", "button"], function(provide, bemDom, Button) {
  provide(
    bemDom.declBlock(this.name, {
      onSetMod: {
        js: {
          inited: function() {
            let ymButton = this.findChildBlock({ block: Button, modName: "ym", modVal: true });

            ymButton._domEvents().on("click", e => {
              e.preventDefault();

              // eslint-disable-next-line no-undef
              ym(48651622, "reachGoal", "ticketsbutton");

              setTimeout(() => {
                window.location.href = "http://rupor.biz/widgets/event-tickets/361";
              }, 500);
            });
          }
        }
      }
    })
  );
});
