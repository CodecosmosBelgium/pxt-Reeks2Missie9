//% color="#D83B01" weight=100 icon="\uf20a" block="AgentExtension"
namespace AgentExtension {
    //% block="agent move $direction by $amount"
    //% amount.defl=1
    //% amount.min=1
    export function agentMoveFourDirection(direction: FourDirection, amount: number) {
        for (let i = 0; i < amount; i++) {
            player.execute(`scoreboard players set @a level_timer 0`)
            loops.pause(100)
            agent.move(direction, 1)
        }
    }
}


//% color=190 weight=100 icon="\uf20a" block="CodeCosmos"
namespace CodeCosmos {
    //% block="pickup tool"
    export function pickupTool() {
        player.execute(`scoreboard players set @a level_timer 0`)
        player.execute(`function exercises/ex_1/pickup_tool`)
        loops.pause(50);
    }
}