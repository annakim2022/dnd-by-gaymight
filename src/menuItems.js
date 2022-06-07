export const menuItems = [
    {
     title: "DnD by Gaymnight",
     path: ""
    },
    {
        title: "Player Bios",
        path: "player-bios"
       },
    {
     title: "Character Sheets",
     path: "character-sheets",
     submenu: [
        {
        title: "Yiu Lai",
        path: "yiu-lai-character-sheets",
        },
        {
         title: "Aelith",
         path: "aelith-character-sheets",
        },
       ]
     
    },
    {
     title: "Campaigns",
     submenu: [
        {
        title: "Yiu Lai",
        submenu: [
         {
          title: "Session Summaries",
          path: "session-summaries-yiu-lai",
         },
         {
          title: "Random Lore",
         },
         {
            title: "NPCs",
           },
        ],
        },
        {
         title: "Aelith",
            submenu: [
             {
              title: "Session Summaries",
              path: "session-summaries-aelith",
             },
             {
              title: "Random Lore",
            //   submenu: [
            //    {
            //     title: "",
            //    },
            //    {
            //     title: "",
            //    },
            //   ],
             },
             {
                title: "NPCs",
               },
            ],
        },
       ]
    },
    {
        title: "Homebrewed",
        submenu: [
            {
            title: "Races",
            path: "homebrewed-races",
            },
            {
             title: "Classes",
             path: "homebrewed-classes",
            },
           ]
       }

   ];