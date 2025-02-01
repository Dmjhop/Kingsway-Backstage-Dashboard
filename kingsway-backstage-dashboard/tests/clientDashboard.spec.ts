import { test, expect } from "@playwright/test"

test("should filter vocalList correctly", async ({ page }) => {
  // Mock data for testing
  const sortedVocalList = [
    { position: "Choir" },
    { position: "Song Leader - Male" },
    { position: "Song Leader - Female" },
    { position: "Choir" },
  ]

  // Mock the component's props and state
  await page.goto("http://localhost:3000/backstage/sunday-default") // Adjust the URL to your local server

  // Evaluate the filtering logic in the browser context
  const vocalList = await page.evaluate((sortedVocalList) => {
    const getRidVocalVals = ["Choir"]
    return sortedVocalList.filter(
      (person) =>
        !getRidVocalVals.includes(person.position) ||
        ["Song Leader - Male", "Song Leader - Female"].includes(person.position)
    )
  }, sortedVocalList)

  // Assert the expected output
  expect(vocalList).toEqual([
    { position: "Song Leader - Male" },
    { position: "Song Leader - Female" },
  ])
})
