const cardData = [
  {
    key: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/4b4b/d56e/1f16eb13ce1fb94672d3bb140380bfdc?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pcg3foHQ7RkU0a3lJ0JKJ8yyzvkfR-HXUXpCibAOiH-89WRH3kSTcnGiME82EzvToMBOBDBABpMIXQebQEUFIR2nEvtblkd21fz49bT-VxICHc~XbJMfsZlrth3suYsthDh7Dz3rvb3tEoa84hUkaX8r7a8LgiUGln5EUUePOtS6aEWYi5PNq92Ge9LIYmkyboGYncekXMtJxfgCiQpDIFYa4Af3ozfrODwKe~CCwiMumUvyFWT7ehqtIS367qbKWvjmXFXKTvgy4UcAbWtEOfdyhnk8ctYVr-qDtN4r7O3DWWZnFBEoCM1biDPUOHiq7obEqLydDZQy2hxBF2Rhbg__",
    name: "Book My Ground",
    projectType: "Website",
    link: "https://www.youtube.com/",
  },
  {
    key: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/70fc/0a34/3c4184416434fa4231554547e3b6dd8e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eLMyI1bIrIz-0iS~t104FBfUw87Vt09cHyZ8uHPkjIg6egD1MfrojfTcoZQVLcFoJlD~D2Yv0HM9b2jyFtYct-gLVqJ6Ujfx5yvQl92CqMFgH2wwCRE9opirTQ-K1r2I3CDPa50JidkJtf08TKVF4JxAn-z9LNI4IAgk04IKocem9uDsytP7ikjGXDQQezDVaYXtymdj3Gfn4eWRhydne~iBeM9smrnlvdl7giFWXC5UMt2Upn1pdSyGYPLqEU2gXgK70~COYEB-zHmz8tIpA-NeA2-RjcHwhxPxYUqeujROL5IBHxn2wYvyejIqnSoC9cweo-FAuULbHnUiR42Dyw__",
    name: "OmniFood",
    projectType: "Website",
    link: "youtube.com",
  },
  {
    key: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/4b4b/d56e/1f16eb13ce1fb94672d3bb140380bfdc?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pcg3foHQ7RkU0a3lJ0JKJ8yyzvkfR-HXUXpCibAOiH-89WRH3kSTcnGiME82EzvToMBOBDBABpMIXQebQEUFIR2nEvtblkd21fz49bT-VxICHc~XbJMfsZlrth3suYsthDh7Dz3rvb3tEoa84hUkaX8r7a8LgiUGln5EUUePOtS6aEWYi5PNq92Ge9LIYmkyboGYncekXMtJxfgCiQpDIFYa4Af3ozfrODwKe~CCwiMumUvyFWT7ehqtIS367qbKWvjmXFXKTvgy4UcAbWtEOfdyhnk8ctYVr-qDtN4r7O3DWWZnFBEoCM1biDPUOHiq7obEqLydDZQy2hxBF2Rhbg__",
    name: "Natours",
    projectType: "Website",
    link: "jiocinema.com",
  },
  {
    key: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/4b4b/d56e/1f16eb13ce1fb94672d3bb140380bfdc?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pcg3foHQ7RkU0a3lJ0JKJ8yyzvkfR-HXUXpCibAOiH-89WRH3kSTcnGiME82EzvToMBOBDBABpMIXQebQEUFIR2nEvtblkd21fz49bT-VxICHc~XbJMfsZlrth3suYsthDh7Dz3rvb3tEoa84hUkaX8r7a8LgiUGln5EUUePOtS6aEWYi5PNq92Ge9LIYmkyboGYncekXMtJxfgCiQpDIFYa4Af3ozfrODwKe~CCwiMumUvyFWT7ehqtIS367qbKWvjmXFXKTvgy4UcAbWtEOfdyhnk8ctYVr-qDtN4r7O3DWWZnFBEoCM1biDPUOHiq7obEqLydDZQy2hxBF2Rhbg__",
    name: "Akadyma",
    projectType: "Website",
    link: "jiocinema.com",
  },
  {
    key: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/70fc/0a34/3c4184416434fa4231554547e3b6dd8e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eLMyI1bIrIz-0iS~t104FBfUw87Vt09cHyZ8uHPkjIg6egD1MfrojfTcoZQVLcFoJlD~D2Yv0HM9b2jyFtYct-gLVqJ6Ujfx5yvQl92CqMFgH2wwCRE9opirTQ-K1r2I3CDPa50JidkJtf08TKVF4JxAn-z9LNI4IAgk04IKocem9uDsytP7ikjGXDQQezDVaYXtymdj3Gfn4eWRhydne~iBeM9smrnlvdl7giFWXC5UMt2Upn1pdSyGYPLqEU2gXgK70~COYEB-zHmz8tIpA-NeA2-RjcHwhxPxYUqeujROL5IBHxn2wYvyejIqnSoC9cweo-FAuULbHnUiR42Dyw__",
    name: "OmniFood",
    projectType: "Website",
    link: "jiocinema.com",
  },
  {
    key: 1,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/70fc/0a34/3c4184416434fa4231554547e3b6dd8e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eLMyI1bIrIz-0iS~t104FBfUw87Vt09cHyZ8uHPkjIg6egD1MfrojfTcoZQVLcFoJlD~D2Yv0HM9b2jyFtYct-gLVqJ6Ujfx5yvQl92CqMFgH2wwCRE9opirTQ-K1r2I3CDPa50JidkJtf08TKVF4JxAn-z9LNI4IAgk04IKocem9uDsytP7ikjGXDQQezDVaYXtymdj3Gfn4eWRhydne~iBeM9smrnlvdl7giFWXC5UMt2Upn1pdSyGYPLqEU2gXgK70~COYEB-zHmz8tIpA-NeA2-RjcHwhxPxYUqeujROL5IBHxn2wYvyejIqnSoC9cweo-FAuULbHnUiR42Dyw__",
    name: "OmniFood",
    projectType: "Website",
    link: "httpjiocinema.com",
  },
];

export default cardData;
