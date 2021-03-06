export default function bootState(){
    return{
        preload: function () {

            this.load.image('preloaderBackground', 'assets/preloadbck.png');
            this.load.image('preloaderBar', 'assets/preloadbar.png');
    
        },
    
        create: function () {
    
            if (this.game.device.desktop)
            {
                this.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
    
                this.scale.pageAlignHorizontally = true;
            }
            else
            {
               
                this.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
                this.scale.minWidth = 150;
                this.scale.minHeight = 250;
                this.scale.maxWidth = 600;
                this.scale.maxHeight = 1000;
                this.scale.forceLandscape = false;
                this.scale.pageAlignHorizontally = true;
            }
    
            // this.scale.setScreenSize(true);
            this.state.start('load');
    
        }
    }
}