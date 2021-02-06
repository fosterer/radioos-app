import React from "react";
import ViewTemplatePlain from "../features/ViewTemplatePlain";
import ViewTemplateWithAppBar from "../features/ViewTemplateWithAppBar";

function useViewTemplate() {

    function withPlainViewTemplate(children) {

        return (
            <ViewTemplatePlain>
                {children}
            </ViewTemplatePlain>
        );
    }

    function withAppBarViewTemplate(children, nav) {

        return (
            <ViewTemplateWithAppBar nav={nav}>
                {children}
            </ViewTemplateWithAppBar>
        );
    }

    return { withPlainViewTemplate, withAppBarViewTemplate };
}

export default useViewTemplate;