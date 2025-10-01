function playerMovement () {
    if (controller.left.isPressed()) {
        p1xDir = -1
    }
    if (controller.right.isPressed()) {
        p1xDir = 1
    }
    if (controller.up.isPressed()) {
        p1yDir = -1
    }
    if (controller.down.isPressed()) {
        p1yDir = 1
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        p2xDir = -1
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        p2xDir = 1
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        p2yDir = -1
    }
    if (controller.player2.isPressed(ControllerButton.Down)) {
        p2yDir = 1
    }
    mySprite.vx = p1xDir * p1Speed
    mySprite.vy = p1yDir * p1Speed
    mySprite2.vx = p2xDir * p2Speed
    mySprite2.vy = p2yDir * p2Speed
}
function initVariables () {
    p1xDir = 0
    p1yDir = 0
    p2xDir = 0
    p2yDir = 0
    p1xOffset = 0
    p2xOffset = 1
    p1Speed = 30
    p2Speed = 30
}
let p2Speed = 0
let p1Speed = 0
let p2yDir = 0
let p2xDir = 0
let p1yDir = 0
let p1xDir = 0
let p2xOffset = 0
let p1xOffset = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
initVariables()
mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.stairNorth)
mySprite.setPosition(mySprite.x + p1xOffset, mySprite.y)
mySprite2.setPosition(mySprite2.x + p2xOffset, mySprite2.y)
for (let value of tiles.getTilesByType(sprites.dungeon.floorLight0)) {
    tiles.setWallAt(value, true)
}
game.onUpdate(function () {
    playerMovement()
})
