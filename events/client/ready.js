module.exports = client => {
    console.log(`${client.user.username} est en ligne !`);
    client.user.setPresence({ activity: { name: 'y!help | Yuu Otasoka', type: 'WATCHING'}, status: 'idle' })
    .then(console.log)
    .catch(console.error);
}