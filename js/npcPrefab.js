class npcPrefab extends Phaser.GameObjects.Sprite 
{
    constructor(_scene,_npc)
    { //instanciar el objeto
        super(_scene,_npc.posX,_npc.posY,_npc.id);
        _scene.add.existing(this);
        _scene.physics.world.enable(this);
        this.loadAnimations();
        this.anims.play(_npc.id,true);
        this.body.setSize(16,16).setOffset(40,22).setImmovable();
        this.scene = _scene;
        this.zone = this.scene.add.zone(_npc.posX,_npc.posY-2).setSize(24,24);
        this.scene.physics.world.enable(this.zone);
        this.zone.body.setImmovable();
        this.zone.body.debugBodyColor = 0xffffff;
        this.setColliders();
        this.npc = _npc;               
    }

    loadAnimations()
   {
        this.anims.create(
        {
            key: 'npc1',
            frames:this.anims.generateFrameNumbers('npc', {start:0, end:8}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create(
        {
            key: 'npc2',
            frames:this.anims.generateFrameNumbers('npc', {start:9, end:17}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create(
        {
            key: 'npc3',
            frames:this.anims.generateFrameNumbers('npc', {start:18, end:26}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create(
        {
            key: 'npc4',
            frames:this.anims.generateFrameNumbers('npc', {start:27, end:35}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create(
        {
            key: 'npc5',
            frames:this.anims.generateFrameNumbers('npc', {start:36, end:44}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create(
        {
            key: 'npc6',
            frames:this.anims.generateFrameNumbers('npc', {start:45, end:53}),
            frameRate: 10,
            repeat: -1
        });
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
            this.zone,
            function()
            {
                this.scene.interactiveObject(this.npc);
            },
            null,
            this
        );
    }

    preUpdate(time,delta)
    {
        super.preUpdate(time, delta);
    }
}