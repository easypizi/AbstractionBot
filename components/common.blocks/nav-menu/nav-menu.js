modules.define(
  "nav-menu",

  ["i-bem-dom", "link"],

  function(provide, bemDom, Link) {
    provide(
      bemDom.declBlock(this.name, {
        onSetMod: {
          js: {
            inited: function() {
              let links = this.findChildBlocks({ block: Link, modName: "click", modVal: true });

              links.map(item => {
                item._events().on("click", e => {
                  e.preventDefault();
                  document.querySelector("#place").scrollIntoView({ behavior: "smooth" });
                });
              });
            }
          }
        }
      })
    );
  }
);
