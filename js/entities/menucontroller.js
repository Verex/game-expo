class MenuController extends Entity {
    constructor(eid, owner) {
        super(eid, owner, EntityType.ENTITY_MENUCONTROLLER);

        this.componentFactory.construct(ComponentID.COMPONENT_INPUT);
        this.componentFactory.construct(ComponentID.COMPONENT_TEXT);

        this.textComponent = this.getComponent(ComponentID.COMPONENT_TEXT);
        this.menuText = "MENU";

        this.timer = 1;
        this.text = ['Press enter to play!!!', '', 'Press enter to play!!!', ''];
        this.textColors = ['white', 'white', 'red', 'red'];
        this.textIdx = 0;

        this.textPos = vec2.fromValues(
            GlobalVars.getInstance().clientWidth * 0.5,
            GlobalVars.getInstance().clientHeight * 0.85
        );

        this.textComponent.addText(
            this.text[this.textIdx],
            this.textPos,
            Assets.getInstance().getFont("PressStart2P-Regular"),
            this.menuText,
            45
        );

        this.textComponent.addText(
            "Chroma Scape",
            vec2.fromValues(
                GlobalVars.getInstance().clientWidth * 0.5,
                GlobalVars.getInstance().clientHeight * 0.15
            ),
            Assets.getInstance().getFont("PressStart2P-Regular"),
            "GAMETITLE",
            65
        );
    }

    onResize(nw, nh) {
        var pos = vec2.fromValues(
            nw * 0.5,
            nh * 0.8
        );
        
        this.textComponent.addText(
            this.text[this.textIdx],
            pos,
            Assets.getInstance().getFont("PressStart2P-Regular"),
            this.menuText,
            45
        );


        this.textComponent.addText(
            "Chroma Scape",
            vec2.fromValues(
                GlobalVars.getInstance().clientWidth * 0.5,
                GlobalVars.getInstance().clientHeight * 0.15
            ),
            Assets.getInstance().getFont("PressStart2P-Regular"),
            "GAMETITLE",
            65
        );
    }

    tick(dt) {
        if(this.timer > 0) {
            this.timer -= dt;
        }
        if(this.timer <= 0) {
            this.timer = 1;
            this.textIdx = (this.textIdx + 1) % this.text.length;
            this.textComponent.addText(
                this.text[this.textIdx],
                this.textPos,
                Assets.getInstance().getFont("PressStart2P-Regular"),
                this.menuText,
                45
            );
            this.textComponent.setTextColor(this.menuText, this.textColors[this.textIdx]);
        }
    }
};

EntityType.ENTITY_MENUCONTROLLER.construction = (owner) => {
    return new MenuController(
        newID++,
        owner
    );
}
