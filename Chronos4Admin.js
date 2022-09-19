/* @preserve
*  Created at 15 September 2022 by Anyx and modified by PlanetCloud.
*  Last modified at 16 September 2022 by PlanetCloud.
*  DO NOT REMOVE CREDITS!
*  Created for: Wybe Network.
*/
var changeElements = [
{name: "Change Password", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Change Language", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Update Contact Email", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Getting Started", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Account Upgrades", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Account Settings", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Online File Manager", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Directory Privacy", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Disk Usage", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "FTP Accounts", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Free FTP Software", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Backups", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "phpMyAdmin", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "MySQL Databases", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Remote MySQL", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "PostgreSQL Databases", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Addon Domains", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Sub Domains", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Aliases (Parked Domains)", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Redirects", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Email Accounts", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Forwarders", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "MX Entry", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "SPF Records", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Webmail", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Account Statistics", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Error Logs", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "General PHP Info", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Access Logs", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "IP Blocker", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "SSL/TLS", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "SiteBuilder", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Softaculous Apps Installer", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "SEO Tools", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Alter PHP Config", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Cron Jobs", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "CNAME Records", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Error Pages", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Softaculous Apps Installer", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Domain Types", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Tutorials", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Support Forum", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Create New Ticket", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Open Support Tickets", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Closed Support Tickets", action: "modify", attr: "itemdesc", value:"#Chronos4Admin"},
{name: "Change Password", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Change Language", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Update Contact Email", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Getting Started", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Account Upgrades", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Account Settings", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Online File Manager", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Directory Privacy", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Disk Usage", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "FTP Accounts", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Free FTP Software", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Backups", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "phpMyAdmin", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "MySQL Databases", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Remote MySQL", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "PostgreSQL Databases", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Addon Domains", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Sub Domains", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Aliases (Parked Domains)", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Redirects", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Email Accounts", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Forwarders", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "MX Entry", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "SPF Records", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Webmail", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Account Statistics", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Error Logs", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "General PHP Info", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Access Logs", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "IP Blocker", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "SSL/TLS", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "SiteBuilder", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Softaculous Apps Installer", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "SEO Tools", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Alter PHP Config", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Cron Jobs", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "CNAME Records", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Error Pages", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Softaculous Apps Installer", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Domain Types", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Tutorials", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Support Forum", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Create New Ticket", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Open Support Tickets", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"},
{name: "Closed Support Tickets", action: "modify", attr: "url", value: "https://www.byet.net/index.php?/profile/523351-chronos/"}
];

function indexPanelElements() {
    let panelElementsIndex = [],
        g = i = 0;
    PAGE.appGroups.forEach(group => {
        group.items.forEach(item => {
            if (typeof panelElementsIndex[item.itemdesc] == 'undefined') {
                panelElementsIndex[item.itemdesc] = [];
            }
            panelElementsIndex[item.itemdesc].push({
                group: g,
                item: i
            });
            i++;
        });
        g++;
        i = 0;
    });
    return panelElementsIndex;
}

(() => {
    if (typeof changeElements == "undefined") {
        return console.log("ElementChanger: changeElements variable is not defined. No elements changed.");
    }
    if (changeElements.length == 0) {
        return console.log('ElementChanger: Nothing to modify.');
    }

    // Index changeElements
    var toChange = {
        modify: [],
        remove: []
    };
    changeElements.forEach(e => {
        if (typeof e.action == 'undefined') {
            e.action = 'modify';
        }
        if (!['modify', 'remove'].includes(e.action)) {
            console.log(`ElementChanger: Illegal action ${e.action} specified for the following element:`, e);
            return;
        }
        toChange[e.action].push(e);
    });

    // Remove elements
    if (toChange.remove.length > 0) {
        panelElementsIndex = indexPanelElements();
        toChange.remove.forEach(r => {
            if (typeof panelElementsIndex[r.name] == 'undefined') {
                return console.log(`ElementChanger: Trying to remove element ${r.name} which does not exist.`)
            }
            panelElementsIndex[r.name].forEach(e => {
                PAGE.appGroups[e.group].items = PAGE.appGroups[e.group].items.filter(i => i.itemdesc != r.name);
            });
        });
    }

    // Modify elements
    panelElementsIndex = indexPanelElements();
    toChange.modify.forEach(c => {
        if (typeof panelElementsIndex[c.name] == 'undefined') {
            return console.log(`ElementChanger: Trying to change element ${c.name} which does not exist.`);
        }
        panelElementsIndex[c.name].forEach(e => {
            PAGE.appGroups[e.group].items[e.item][c.attr] = c.value;
        })
    });

    // Done!
    console.log('ElementChanger: All modifications have been made.');
})();
