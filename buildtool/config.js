module.exports = {
    /** 不包含依赖的打包去除的依赖代码行
     * @type Map<string,number>
     */
    libRemoveFilesLine: new Map([["src/libJs/aout.blog/index.js", 2]]),
    /** 不打包的文件
     *  @type Set<string>
     */
    removeFiles: new Set(["src/INCL.js"]),
    /** 不包含依赖的打包去除的依赖文件
     * @type Set<string>
     */
    libRemoveFiles: new Set(["src/libJs/aout.blog/lib/vhannels.tool.js"]),

    /** 源码输入目录
     * @type string
     */
    indir: "src",
    /** 输出目录
     *
     * 用于每次打包开始的清理
     *
     * @type string
     */
    outdir: "build",
    /** 包含依赖的打包输出路径
     * @type string
     */
    liboutdir: "build/aout.blog_bin",
    /** 不包含依赖的打包输出路径
     * @type string
     */
    noliboutdir: "build/aout.blog",
    /** 压缩模式
     * @type "none"|"zip"|"tar"|"gtar"|("none"|"zip"|"tar"|"gtar")[]
     */
    compression: ["zip", "tar", "gtar"],
    /** 压缩完成后是否清除临时文件
     *  @type boolean
     */
    compressionEndClear: false
};
