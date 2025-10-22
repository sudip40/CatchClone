const color={
    green:{
        100:'#10AD5D'
    },
    red:{
        100:'#ED1C24'
    },
    black:{
        100:'#333333',
        200:'#777777',
        300:'#020202'
    },
    white:{
        100:'#ffffff'
    },
    yellow:{
        100:'#B8A064'
    }
}

export const theme={
    background:{
        main_bg:color.white[100],
        component_redbg:color.red[100],
        background_yellow_shade_1:color.yellow[100],
        background_gray:color.black[200] 
    },
    content:{
        success_text:color.green[100],
        error_text:color.red[100],
        highlight_text:color.red[100],
        white_text:color.white[100],
        theme_text:color.black[100],
        shadow_text:color.black[100],
        disable_text:color.black[200],
        bold_text:color.black[300]
    }
}