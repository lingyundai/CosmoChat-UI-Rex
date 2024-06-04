const AllStyles = {
    navigationBar: {
      sx: {
        display: "flex",
        height: "48px",
        padding: "12px",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "rgba(255, 255, 255, 1)",
        position: "sticky",
        width: "98%",
        zIndex: 100,
        marginTop: 0,
      },
    },
    navigationRight: {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        width: "20%",
      },
    },
    navigationLeft: {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
      },
    },
    navigationName: {
      sx: {
        width: "80%",
        color: "var(--Greyscale-900, #212121)",
        fontFamily: "Urbanist",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "120%",
        textAlign: "left",
      },
    },
    homeBody: {
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "50px",
        width: "100%",
      },
    },
    homeRex: {
      sx: {
        zIndex: 100,
        padding: "100px 0",
      },
    },
    greetings: {
      sx: {
        display: "flex",
        color: "var(--Greyscale-900, #212121)",
        fontFamily: "Urbanist",
        fontSize: "32px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "120%",
        margin: "50px 0",
      },
    },
    message: {
      sx: {
        color: "var(--Greyscale-900, #212121)",
        textAlign: "center",
        fontFamily: "Urbanist",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: 1000,
        lineHeight: "120%",
        margin: "0 0 15px 0",
      },
    },
    message2: {
      sx: {
        color: "var(--Greyscale-900, #212121)",
        textAlign: "center",
        fontFamily: "Satoshi",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "140%",
        letterSpacing: "0.2px",
        margin: "0 0 32px 0",
      },
    },
    startChatButton: {
      sx: {
        display: "flex",
        padding: "20px 16px",
        borderRadius: "100px",
        background: "var(--Primary-500, #6949FF)",
        boxShadow: "4px 8px 24px 0px rgba(0, 205, 189, 0.25)",
        height: "58px",
        ":hover": {
          textDecoration: "none",
        },
        width: "340px",
      },
    },
    startChatButtonText: {
      sx: {
        width: "100%",
        color: "var(--Others-White, #FFF)",
        textShadow: "4px 8px 24px rgba(0, 205, 189, 0.25)",
        fontFamily: "Urbanist",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "140%",
        letterSpacing: "0.2px",
        textTransform: "capitalize",
      },
    },
    endedChats: {
      sx: {
        color: "var(--Greyscale-900, #212121)",
        fontFamily: "Satoshi",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "120%",
        textAlign: "left",
      },
    },
    seeAllLink: {
      sx: {
        color: "var(--Primary-500, #6949FF)",
        textAlign: "right",
        fontFamily: "Satoshi",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "140%",
        letterSpacing: "0.2px",
        textDecoration: "none",
      },
    },
    endedChatsTitle: {
      sx: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "24px 0",
      },
    },
  
    startAnotherChatButtonGrid: {
      sx: {
        display: "flex",
        padding: "24px 24px 36px 24px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "24px 24px 0px 0px",
        border: "1px solid var(--Greyscale-100, #F5F5F5)",
        background: "var(--Others-White, #FFF)",
        position: "relative",
      },
    },
  
    optionsMenu: {
      sx: {
        borderRadius: "16px",
        boxShadow: "0px 20px 100px 0px rgba(4, 6, 15, 0.08)",
        display: "inlineFlex",
        padding: "20px 28px 20px 20px",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "16px",
        width: "100%",
      },
    },
    optonsMenuItem: {
      sx: {
        color: "var(--Greyscale-900, #212121)",
        fontFamily: "Urbanist",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "140%",
        letterSpacing: "0.2px",
      },
    },
  };
  
  export default AllStyles;