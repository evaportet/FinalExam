class examen_av extends Phaser.Scene
{
    constructor()
    {
        super({key:'examen_av'});
    }

    preload()
    { //Carga assets en memoria
        this.cameras.main.setBackgroundColor("112");
        
        this.load.setPath('assets/sprites');
        this.load.image('pozo','spr_pozo.png');
        this.load.image('monumento','spr_richards_glory.png');
        
        this.load.spritesheet('student','spr_student.png',
        {frameWidth:96,frameHeight:64});
        this.load.spritesheet('tree','spr_deco_tree_02_strip4.png',
        {frameWidth:28,frameHeight:43});
        this.load.spritesheet('npc','spr_NPC.png',
        {frameWidth:96,frameHeight:64});
        this.load.spritesheet('UI','spr_UI.png',
        {frameWidth:16,frameHeight:16});
        this.load.spritesheet('counters','spr_counters.png',
        {frameWidth:16,frameHeight:16});
        this.load.spritesheet('cofre','spr_cofre.png',
        {frameWidth:16,frameHeight:22});
        this.load.spritesheet('tienda','spr_shop.png',
        {frameWidth:64,frameHeight:96});
        this.load.spritesheet('weat','spr_weat.png',
        {frameWidth:16,frameHeight:20});
        this.load.spritesheet('cow','spr_deco_cow_strip4.png',
        {frameWidth:32,frameHeight:32});
        this.load.spritesheet('pig','spr_deco_pig_01_strip4.png',
        {frameWidth:32,frameHeight:32});
        this.load.spritesheet('chicken','spr_deco_chicken_01_strip4.png',
        {frameWidth:32,frameHeight:32});

        
        this.load.setPath('assets/tilesets');
        this.load.image('tileset_sunnysideworld_16px','spr_tileset_sunnysideworld_16px.png');
        
        this.load.setPath('assets/sounds');
        
        this.load.setPath('assets/maps');
        this.load.tilemapTiledJSON('examen_av','examen_av.json');

        this.load.setPath('assets/fonts/');
        this.load.bitmapFont('UIFont','gameFont.png','gameFont.xml');
        this.load.bitmapFont('dialogFont','ThaleahFat_16.png','ThaleahFat_16.xml');
        
    }

    create()
    { }
    

    loadAnimations()
    {
        this.anims.create(
        {
            key: 'grow',
            frames:this.anims.generateFrameNumbers('weat', {start:0, end:5}),
            frameRate: 1,
            repeat: 0,
            hideOnComplete:true
        });
        this.anims.create(
        {
            key: 'idleCow',
            frames:this.anims.generateFrameNumbers('cow', {start:0, end:3}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create(
        {
            key: 'idlePig',
            frames:this.anims.generateFrameNumbers('pig', {start:0, end:3}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create(
        {
            key: 'idleChicken',
            frames:this.anims.generateFrameNumbers('chicken', {start:0, end:3}),
            frameRate: 10,
            repeat: -1
        });
    }

    update()
    { //Actualiza whatever
        
    }
}