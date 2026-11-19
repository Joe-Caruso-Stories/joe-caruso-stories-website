// Google Apps Script: emails website contact-form messages to Joe.
// Deployed as a Web app (Execute as: Me, Who has access: Anyone).
// SECRET below is a placeholder in this repo copy; the real value lives only
// in the deployed script and in the Cloudflare secret CONTACT_SECRET.
const TO = "joe@joecarusostories.com";
const SECRET = "PASTE_SECRET_HERE";

function doGet() {
  return json({ ok: true, info: "Contact mailer is running." });
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) return json({ ok: false, error: "unauthorized" });

    const name = String(data.name || "").replace(/[\r\n]+/g, " ").trim().slice(0, 100);
    const email = String(data.email || "").trim().slice(0, 200);
    const subject = String(data.subject || "").replace(/[\r\n]+/g, " ").trim().slice(0, 100);
    const message = String(data.message || "").trim().slice(0, 5000);

    const emailOk = /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/.test(email);
    if (!name || !message || !emailOk) return json({ ok: false, error: "invalid" });

    MailApp.sendEmail({
      to: TO,
      replyTo: email,
      name: "Joe Caruso Stories website",
      subject: "[Website] " + (subject || "New message") + " - " + name,
      body:
        "New message from the joecarusostories.com contact form\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Subject: " + (subject || "(none given)") + "\n\n" +
        message + "\n\n" +
        "(Hit Reply to answer " + name + " directly.)",
    });
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: "server" });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
