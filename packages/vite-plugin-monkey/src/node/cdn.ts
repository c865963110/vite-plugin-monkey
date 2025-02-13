import type { Mod2UrlFn2 } from './types';

/**
 * `https://cdn.jsdelivr.net/npm/${name}@${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 * @param pathname jsdelivr support file combine, normally you don't need set pathname
 * @see https://www.jsdelivr.com/features
 */
export const jsdelivr = (
  exportVarName = '',
  pathname?: string,
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      if (p) {
        return `https://cdn.jsdelivr.net/npm/${name}@${version}/${p}`;
      } else {
        return `https://cdn.jsdelivr.net/npm/${name}@${version}`;
      }
    },
  ];
};

/**
 * `https://fastly.jsdelivr.net/npm/${name}@${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 * @param pathname jsdelivr support file combine, normally you don't need set pathname
 * @see https://www.jsdelivr.com/features
 */
export const jsdelivrFastly = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      if (p) {
        return `https://fastly.jsdelivr.net/npm/${name}@${version}/${p}`;
      } else {
        return `https://fastly.jsdelivr.net/npm/${name}@${version}`;
      }
    },
  ];
};

/**
 * `https://unpkg.com/${name}@${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 * @see https://unpkg.com/
 */
export const unpkg = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      if (p) {
        return `https://unpkg.com/${name}@${version}/${p}`;
      } else {
        return `https://unpkg.com/${name}@${version}`;
      }
    },
  ];
};

/**
 * `https://lf9-cdn-tos.bytecdntp.com/cdn/expire-10-y/${name}/${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 * @see https://cdn.bytedance.com/
 */
export const bytecdntp = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      return `https://lf9-cdn-tos.bytecdntp.com/cdn/expire-10-y/${name}/${version}/${p}`;
    },
  ];
};

/**
 * `https://cdn.bootcdn.net/ajax/libs/${name}/${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 * @see https://www.bootcdn.cn/all/
 */
export const bootcdn = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      return `https://cdn.bootcdn.net/ajax/libs/${name}/${version}/${p}`;
    },
  ];
};

/**
 * `https://lib.baomitu.com/${name}/${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 * @see https://cdn.baomitu.com/
 */
export const baomitu = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      return `https://lib.baomitu.com/${name}/${version}/${p}`;
    },
  ];
};

/**
 * `https://cdn.staticfile.org/${name}/${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 * @see https://staticfile.org/
 */
export const staticfile = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      return `https://cdn.staticfile.org/${name}/${version}/${p}`;
    },
  ];
};
/**
 * `https://cdnjs.cloudflare.com/ajax/libs/${name}/${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 * @see https://cdnjs.com/libraries
 */
export const cdnjs = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      return `https://cdnjs.cloudflare.com/ajax/libs/${name}/${version}/${p}`;
    },
  ];
};

/**
 * `https://unpkg.zhimg.com/${name}/${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 * @link https://unpkg.zhimg.com/
 */
export const zhimg = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      return `https://unpkg.zhimg.com/${name}/${version}/${p}`;
    },
  ];
};

/**
 * `https://npm.elemecdn.com/${name}@${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 */
export const elemecdn = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      return `https://npm.elemecdn.com/${name}@${version}/${p}`;
    },
  ];
};

/**
 * `https://code.bdstatic.com/npm/${name}@${version}/${pathname}`
 * @param exportVarName cdn-exportVarName or resourceName
 */
export const bdstatic = (
  exportVarName = '',
  pathname = '',
): [string, Mod2UrlFn2] => {
  return [
    exportVarName,
    (version, name, _importName = '', resolveName = '') => {
      const p = pathname || resolveName;
      return `https://code.bdstatic.com/npm/${name}@${version}/${p}`;
    },
  ];
};
