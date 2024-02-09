### @hideIteration true
### @flyoutOnly true
# Mission 9

```blocks
player.onChat("level2", function () {
    while (!testBlockUnder(GOLD_BLOCK)) {
        AgentExtension.agentMoveForward()
        
        if (CodeCosmos.testForBlock_belowAgent(GRASS) && AgentExtension.agentNextToBush()) {
            CodeCosmos.spawnOcelot()
        } else if (!testBlock(IRON_BLOCK) && AgentExtension.agentNextToTree()) {
            CodeCosmos.spawnParrot()
        } else if (AgentExtension.agentInFrontIronBars()) {
            AgentExtension.agentTurn(AgentTurn.Left)
        } else if (AgentExtension.agentInFrontTorch()) {
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
Walk down the course until you come upon a block of gold. If the Agent stands on a block of grass AND next to a bush, he spawns an ocelot, otherwise if the Agent stands next to a tree AND NOT on a block of iron, he spawns a parrot, otherwise if the Agent runs into a fence, he goes to the left, otherwise if the Agent runs into a torch, he goes to the right, otherwise he does a 360.