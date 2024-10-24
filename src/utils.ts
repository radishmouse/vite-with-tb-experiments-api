// Wrapper function for sending a message to background.js
export async function sendMessage(obj: Record<string, any>) {
  try {
    // @ts-ignore;
    const resp = await browser.runtime.sendMessage(obj);
    return resp;
  } catch (e) {
    console.error(e);
  }
}
