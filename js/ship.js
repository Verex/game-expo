class Ship extends Entity {
    constructor(width, height, eid, owner) {
        super(eid, owner, EntityType.ENTITY_SHIP);

        // Add components.
        this.componentFactory.construct(ComponentID.COMPONENT_TRANSFORM);
        this.componentFactory.construct(ComponentID.COMPONENT_MESH);

        this.transformComponent = this.getComponent(ComponentID.COMPONENT_TRANSFORM);
        this.transformComponent.absOrigin[Math.Z] = -10;
        this.transformComponent.absRotation[Math.Y] += 10;

        this.meshComponent = this.getComponent(ComponentID.COMPONENT_TRANSFORM);
    }
    tick(dt) {
        //this.transformComponent.origin[Math.Y] -= 0.01;
        this.meshComponent.absRotation[Math.Y] += 1;
        this.transformComponent.updateTransform();
        super.tick(dt);
    }
};

EntityType.ENTITY_SHIP.construction = (owner) => {
    var globals = GlobalVars.getInstance();
    return new Ship(
        globals.clientWidth,
        globals.clientHeight,
        newID++,
        owner
    );
}