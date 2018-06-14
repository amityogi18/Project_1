// @dynamic
/**
 * Author : Shannon Bruns
 *
 * Class for storing regular expressions
 *
 * IMPORTANT : the above //@dynamic is necessary, without this
 * annotation the package build will fail when publishing to Nexus
 */
export class C2CRegex {
  /**
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   * TypeAhead expressions when commas are used in the search
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */

  // format as (lastName, firstName)
  public static readonly commaLastFirstExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F]+[\'\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-\s\S]+[\-?\.?]*?)\,\s?([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+){1}[.*]*$/gmi;

  // format as (lastName, firstName middleName)
  public static readonly commaLastFirstMiddleExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?)\,\s?([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+){1}\s([A-Za-z0-9\u00C0-\u017F\']*[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?)[.*]*$/gmi;

  // format as (lastName, firstName middleName, suffix)
  public static readonly commaLastFirstMiddleSuffixExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?)\,\s?([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+){1}\s([A-Za-z0-9\u00C0-\u017F\']*[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?)\,\s?([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?)[.*]*$/gmi;

  // format as (lastName, firstName, suffix)
  public static readonly commaLastFirstSuffixExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?)\,\s?([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+){1}\,(\s)([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=]+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?)[.*]*$/gmi;

  /**
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   * TypeAhead expressions when commas and successive words are used in the search
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  // format as (name-name name-name name-name, name), could be one or many name, with or without hyphens
  public static readonly commaMultipleLastFirstExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+\-[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-\-?]+)\s([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+\-?[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-\-?]*)\s([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+\-?[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-\-?]*)\,\s?([A-Za-z0-9\u00C0-\u017F\']+){1}[.*]*$/gmi;

  // format as(lastName*, firstName middleName*, suffix) //can have multiple lastNames and middleName, only one firstName
  public static readonly commaLastFirstMiddleSuffixMultipleExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?)\,\s?([A-Za-z0-9\u00C0-\u017F\']+){1}\s([A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\']*[\-?\.?]*?)\,\s?([A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?)[.*]*$/gmi;

  /**
   * ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
   * TypeAhead expressions when spaces are used in the search
   * ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
   */
  // format as (lastName or lastName-lastName*)
   public static readonly spaceLastExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?)[.*]*$/gmi;


  // format as (firstName lastName)
  public static readonly spaceFirstLastExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+){1}\s([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]*[\-?\.?]*?)[.*]*$/gmi;

  // format as (firstName middleName lastName)
  public static readonly spaceFirstMiddleLastExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+){1}\s([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]*[\-?\.?]*?)\s([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]*[\-?\.?]*?)[.*]*$/gmi;

  // format as (firstName middleName* lastName suffix)
  public static readonly spaceFirstMiddleLastSuffixExp : RegExp = /^([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+){1}\s([A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?[\s+[A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]*[\-?\.?]*?)\s([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-]+[\-?\.?]*?){1}\s([A-Za-z0-9\u00C0-\u017F\']+[\-?\.?]*?){1}[.*]*$/gmi;

 // format as ('x') single character
 public static readonly onlyOneCharacterExp: RegExp = /^([A-Za-z0-9\u00C0-\u017F\'\!\#\$\%\^\&\*\@\<\>\?\~\[\]\{\}\;\:\(\)\_\+\=\-])$/gmi;

  public static readonly typeAheadExpressions: Array<RegExp> = [
      C2CRegex.commaLastFirstExp,
      C2CRegex.commaLastFirstMiddleExp,
      C2CRegex.commaLastFirstMiddleSuffixExp,
      C2CRegex.commaLastFirstSuffixExp,
      C2CRegex.commaMultipleLastFirstExp,
      C2CRegex.commaLastFirstMiddleSuffixMultipleExp,
      C2CRegex.onlyOneCharacterExp,
      C2CRegex.spaceLastExp,
      C2CRegex.spaceFirstLastExp,
      C2CRegex.spaceFirstMiddleLastExp,
      C2CRegex.spaceFirstMiddleLastSuffixExp
  ];
}
