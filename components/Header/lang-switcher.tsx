import useLanguageSwitcher, { LanguageDescriptor } from "@/custom-hooks/useLanguageSwitcher";
import { NextPageContext } from "next";
import React from "react";

export type LanguageSwitcherProps = {
  context?: NextPageContext;
};

export const LanguageSwitcher = ({ context }: LanguageSwitcherProps = {}) => {

  const { currentLanguage, switchLanguage, languageConfig } = useLanguageSwitcher({ context });

  if (!languageConfig) {
    return null;
  }

  return (
    <div className="text-center notranslate">
        asddsa <h1></h1>
      {languageConfig.languages.map((ld: LanguageDescriptor, i: number) => (
        <React.Fragment key={`l_s_${ld}`}>
          {currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld.name) ? (
            <span className="mx-3 text-orange-300">{ld.title}</span>
          ) : (
            <a
              onClick={switchLanguage(ld.name)}
              className="mx-3 text-blue-300 cursor-pointer hover:underline"
            >
              {ld.title}
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;