import fetch from "node-fetch";
const run = async () => {
    const r = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name:"t", email:"t@t.com", subject:"test", message:"t"})
    });
    const data = await r.json();
    console.log(data);
};
run();
