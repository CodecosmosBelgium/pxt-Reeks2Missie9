### @hideIteration true
### @flyoutOnly true
# Mission 9

```blocks
player.onChat("level2", function () {
    while (!testBlockUnder(GOLD_BLOCK)) {
        AgentExtension.agentMoveForward()
        
        if (CodeCosmos.testForBlock_belowAgent(GRASS) && CodeCosmos.testBlockNextTo(FLOWERING_AZALEA_LEAVES)) {
            CodeCosmos.spawnOcelot()
        } else if (!testBlock(IRON_BLOCK) && testBlockNextTo(OAK_SAPLING)) {
            CodeCosmos.spawnParrot()
        } else if (agentInFrontIronBars()) {
            AgentExtension.agentTurn(AgentTurn.Left)
        } else if (agentInFrontTorch()) {
            AgentExtension.agentTurn(AgentTurn.Right)
        } else {
            AgentExtension.agent360()
        }
    }    
})
```

```template
player.onChat("level2", function () {
    
})
```

## Multiple Selection
Use the learning platform to solve the exercise.