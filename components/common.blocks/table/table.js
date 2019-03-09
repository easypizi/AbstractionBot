modules.define("table", ["i-bem-dom", "BEMHTML", "button", "jquery"], function(
  provide,
  bemDom,
  BEMHTML,
  Button,
  $
) {
  provide(
    bemDom.declBlock(this.name, {
      onSetMod: {
        js: {
          inited: function() {
            let pagination = this.findChildElem("pagination");

            this.allButtons = pagination.findChildBlocks(Button);
            this.currentCounter = 1;
            let allPages = this.params.pages;

            let PrevButton = this.findChildBlock({
              block: Button,
              modName: "currentPage",
              modVal: "prev"
            });

            let NextButton = this.findChildBlock({
              block: Button,
              modName: "currentPage",
              modVal: "next"
            });

            this.allButtons.map(item => {
              item._domEvents().on("click", () => {
                let isPrevBtn = item.hasMod("currentPage", "prev");
                let isNextBtn = item.hasMod("currentPage", "next");

                if (isPrevBtn) {
                  this.currentCounter = this.currentCounter - 1;
                  this._getPageData(this.currentCounter);
                } else if (isNextBtn) {
                  this.currentCounter = this.currentCounter + 1;
                  this._getPageData(this.currentCounter);
                } else {
                  this.currentCounter = item.params.btnId;
                  this._getPageData(item.params.btnId);
                }

                this._removeAllStates();

                if (this.currentCounter > 1) {
                  PrevButton.setMod("disabled", false);
                } else {
                  PrevButton.setMod("disabled", true);
                }

                if (this.currentCounter === allPages) {
                  NextButton.setMod("disabled", true);
                } else {
                  NextButton.setMod("disabled", false);
                }
              });
            });
          }
        }
      },

      _getPageData: function(pageIndex) {
        $.ajax({
          async: true,
          url: "/changePage/" + pageIndex,
          crossDomain: true,
          method: "GET"
        }).done(response => {
          if (response.status) {
            this._renderNewPage(response.data);
          }
        });
      },

      _removeAllStates: function() {
        this.allButtons.map(item => {
          if (item.params.btnId === this.currentCounter) {
            return item.setMod("active");
          }
          return item.delMod("active");
        });
      },

      _renderNewPage: function(data) {
        let rowsAndPages = data.map((item, index) => {
          let isColoured = index % 2 ? true : false;
          return {
            elem: "row",
            mix: { block: "table", elem: !isColoured ? "even" : "odd" },
            js: {
              linkId: item.numId
            },
            data: {
              item: item,
              number: index + 1,
              linkId: item.numId,
              isVisible: item.visible > 0 ? true : false
            }
          };
        });

        bemDom.replace(
          this.findChildElem("body").domElem,
          BEMHTML.apply({
            block: "table",
            elem: "body",
            content: rowsAndPages.reverse()
          })
        );
      }
    })
  );
});
