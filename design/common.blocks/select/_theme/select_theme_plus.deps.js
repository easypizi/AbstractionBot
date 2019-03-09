[
  {
    mustDeps: [{ block: "button", mods: { theme: "25menu" } }],
    shouldDeps: [
      { block: "popup", mods: { theme: "25menu" } },
      { block: "menu", mods: { theme: "25menu" } },
      { block: "icon" }
    ]
  },
  {
    tech: "js",
    mustDeps: [
      {
        tech: "bemhtml",
        block: "select",
        mods: { mode: ["radio", "check", "radio-check"], focused: true },
        elems: ["button", "control", "menu"]
      }
    ]
  }
];
