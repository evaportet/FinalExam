class objectPrefab 
{
    constructor(_scene,_zone)
    { //instanciar el objeto
        this.scene = _scene;
        this.areaZone = this.scene.add.zone(_zone.posX,_zone.posY);
        switch(_zone.id)
        {
            case "huerto":
                this.areaZone.setSize(90,72);
            break;
            case "tienda":
                this.areaZone.setSize(80,64);
            break;
            case "granja":
                this.areaZone.setSize(90,90);
            break;
            case "monumento":
                this.areaZone.setSize(40,60);
            break;
            default:
                this.areaZone.setSize(32,32);
            break;
        }
        this.scene.physics.world.enable(this.areaZone);
        this.areaZone.body.setImmovable();
        this.areaZone.body.debugBodyColor = 0xffffff;
        this.setColliders();
        this.zone = _zone;
        this.zone.areaZone = this.areaZone;
    }

    setColliders()
    {
        this.scene.physics.add.collider
        (
            this.scene.student,
            this
        );

        this.scene.physics.add.overlap
        (
            this.scene.student,
            this.areaZone,
            function()
            {
                this.scene.interactiveObject(this.zone);
            },
            null,
            this
        );
    }   
}