import { task } from "@trigger.dev/sdk";

export const exampleTask = task({
  id: "example-task",
  run: async (payload: { message: string }) => {
    console.log("Processing message:", payload.message);
    return { success: true };
  },
});
