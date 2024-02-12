function testBlock(block: number): boolean {
    let posAgent = agent.getPosition()
    return blocks.testForBlock(block, posAgent)
}

function testBlockUnder(block: number): boolean {
    let posBelowAgent = agent.getPosition().add(world(0, -1, 0))
    return blocks.testForBlock(block, posBelowAgent)
}

function testBlockNextTo(block: number): boolean {
    return (
        blocks.testForBlock(block, agent.getPosition().add(pos(0, -1, 1))) || 
        blocks.testForBlock(block, agent.getPosition().add(pos(0, -1, -1))) || 
        blocks.testForBlock(block, agent.getPosition().add(pos(1, -1, 0))) || 
        blocks.testForBlock(block, agent.getPosition().add(pos(-1, -1, 0))) ||
        blocks.testForBlock(block, agent.getPosition().add(pos(0, 0, 1))) || 
        blocks.testForBlock(block, agent.getPosition().add(pos(0, 0, -1))) || 
        blocks.testForBlock(block, agent.getPosition().add(pos(1, 0, 0))) || 
        blocks.testForBlock(block, agent.getPosition().add(pos(-1, 0, 0)))
    )
}

function ironBarsLeft(): boolean {
    return agent.inspect(AgentInspection.Block, FORWARD) == IRON_BARS
}

function torchRight(): boolean {
    return agent.inspect(AgentInspection.Block, FORWARD) == TORCH
}

const wrong = () => {
    player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
    player.execute(`scoreboard players add @a correctBlocks -100`)
}

enum AgentTurn {
    //% block="left"
    Left = TurnDirection.Left,
    //% block="right"
    Right = TurnDirection.Right
}


//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move forward"
    export function agentMoveForward() {
        player.execute(`scoreboard players set @a level_timer 0`)
        player.execute(`scoreboard players add @a agent_moved 1`)
        loops.pause(100)
        agent.move(FORWARD, 1)
    }
    
    //% block="agent move $direction by $amount"
    //% amount.defl=1
    //% amount.min=1
    export function agentMoveFourDirection(direction: FourDirection, amount: number) {
        for (let i = 0; i < amount; i++) {
            player.execute(`scoreboard players set @a level_timer 0`)
            agent.move(direction, 1)
            loops.pause(100)
        }
    }
    
    //% block="agent in front of torch"
    export function agentInFrontTorch(): boolean {
        return torchRight()
    }

    //% block="agent in front of iron bars"
    export function agentInFrontIronBars(): boolean {
        return ironBarsLeft()
    }

    //% block="agent next to bamboo"
    export function agentNextToBamboo(): boolean {
        return testBlockNextTo(BAMBOO)
    }
    
    //% block="agent on fire"
    export function agentOnFire(): boolean {
        return (testBlock(FIRE))
    }
    
    //% block="agent on gold block"
    export function agentOnGold(): boolean {
        return (testBlock(GOLD_BLOCK))
    }

    //% block="agent next to bush"
    export function agentNextToBush(): boolean {
        return testBlockNextTo(FLOWERING_AZALEA_LEAVES)
    }
    
    //% block="agent next to tree"
    export function agentNextToTree(): boolean {
        return testBlockNextTo(OAK_SAPLING)
    }

    //% block="agent turn $direction"
    export function agentTurn(direction: AgentTurn) {
        agent.turn(direction)
        if (ironBarsLeft() && direction == AgentTurn.Left) {
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else if (torchRight() && direction == AgentTurn.Right) {
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }

    //% block="agent turn 360 degrees"
    export function agent360() {
        if (!(testBlockUnder(IRON_BLOCK) && testBlockNextTo(OAK_SAPLING))
            && !(testBlockUnder(GRASS) && testBlockNextTo(FLOWERING_AZALEA_LEAVES))
            && !(ironBarsLeft())
            && !(torchRight())
        ) {
            for (let i = 0; i < 4; i++) {
                agent.turn(RIGHT_TURN)
            }
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
        player.execute(`scoreboard players set @a level_timer 0`)
    }
}


//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="pickup tool"
    export function pickupTool() {
        player.execute(`scoreboard players set @a level_timer 0`)
        player.execute(`function exercises/ex_1/pickup_tool`)
        loops.pause(100);
    }

    //% block="is block %block=block below agent"
    //% block.shadow=minecraftBlock
    export function testForBlock_belowAgent(block: number): boolean {
        let posBelowAgent = agent.getPosition().add(world(0, -1, 0))
        player.execute(`scoreboard players set @a level_timer 0`)
        return blocks.testForBlock(block, posBelowAgent)
    }

    //% block="place tree"
    export function placeTree() {
        if (testBlockUnder(GRASS) || testBlockUnder(DIRT)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ sapling`)
            player.execute(`function exercises/place/tree`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="place bush"
    export function placeBush() {
        if (!(testBlockUnder(GRASS) || testBlockUnder(DIRT))) {
            bushLeftRight++
            bushLeftRight % 2 == 0 ? player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~-1 flowering_azalea`) : player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~1 flowering_azalea`)
            player.execute(`function exercises/place/bush`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    
    //% block="spawn panda"
    export function spawnPanda() {
        if (testBlockUnder(GRASS) && testBlockNextTo(BAMBOO)) {
            player.execute(`execute @v ~ ~1 ~ summon panda`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    //% block="extinguish fire"
    export function extinguishFire() {
        if (testBlockUnder(FIRE)) {
            player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~ air`)
            player.execute(`function exercises/place/air`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="place bush"
    export function placeBush2() {
        if ((!(testBlockUnder(GRASS) && testBlockNextTo(BAMBOO))) && !testBlockUnder(FIRE)) {
            Math.round(Math.random()) == 0 ? player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~-1 flowering_azalea`) : player.execute(`execute @v ~ ~ ~ setblock ~ ~ ~1 flowering_azalea`)
            player.execute(`function exercises/place/bush`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }


    //% block="spawn ocelot"
    export function spawnOcelot() {
        if (testBlockUnder(GRASS) && testBlockNextTo(FLOWERING_AZALEA_LEAVES)) {
            player.execute(`execute @v ~ ~1 ~ summon ocelot`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }

    //% block="spawn parrot"
    export function spawnParrot() {
        if (!testBlockUnder(IRON_BLOCK) && testBlockNextTo(OAK_SAPLING)) {
            player.execute(`execute @v ~ ~1 ~ summon parrot`)
            player.execute(`scoreboard players add @a correctBlocks 1`)
        } else {
            wrong()
        }
    }
    
    //% block="free the animals"
    export function freeAnimals() {
        if (testBlockUnder(GOLD_BLOCK)) {
            player.execute(`function ex_3/animals`)
        } else {
            wrong()
        }
    }
}