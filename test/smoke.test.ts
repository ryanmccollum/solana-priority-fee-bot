import { describe, expect, it } from "vitest";
import { buildStrategyDecision } from "../src/strategies/coreStrategy.js";

describe("solana-priority-fee-bot", () => {
  it("builds a trade-ready decision when the placeholder score is high", () => {
    const decision = buildStrategyDecision(
      {
        repo: "solana-priority-fee-bot",
        family: "solana",
        market: "time-sensitive Solana trades",
        signal: "execution opportunities that benefit from faster inclusion",
        dryRun: true,
        orderSize: "25",
        privateKeyPreview: "test",
      },
      { score: 0.8 },
    );

    expect(decision.shouldTrade).toBe(true);
  });
});
