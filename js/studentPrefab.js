class studentPrefab extends Phaser.GameObjects.Sprite 
{
    constructor(_scene,_posX,_posY,_spriteTag='student')
    { //instanciar el objeto
        
    }

    

   loadAnimations()
   {
        this.anims.create(
        {
            key: 'idle',
            frames:this.anims.generateFrameNumbers('student', {start:0, end:8}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create(
        {
            key: 'walking',
            frames:this.anims.generateFrameNumbers('student', {start:23, end:30}),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create(
        {
            key: 'run',
            frames:this.anims.generateFrameNumbers('student', {start:46, end:53}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create(
        {
            key: 'dig',
            frames:this.anims.generateFrameNumbers('student', {start:69, end:81}),
            frameRate: 10,
            repeat: 2
        });

        this.anims.create(
        {
            key: 'axe',
            frames:this.anims.generateFrameNumbers('student', {start:92, end:101}),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create(
        {
            key: 'mining',
            frames:this.anims.generateFrameNumbers('student', {start:115, end:124}),
            frameRate: 10,
            repeat: 0
        });

        this.anims.create(
        {
            key: 'watering',
            frames:this.anims.generateFrameNumbers('student', {start:138, end:142}),
            frameRate: 10,
            repeat: 2
        });

        this.anims.create(
        {
            key: 'hammering',
            frames:this.anims.generateFrameNumbers('student', {start:161, end: 183}),
            frameRate: 10,
            repeat: 0
        });
    }

    setColliders()
    {
        this.scene.physics.add.collider
        (
            this.hero,
            this.scene.walls
        );        
    }

    preUpdate(time,delta)
    {
           
        
        super.preUpdate(time, delta);
    }
}