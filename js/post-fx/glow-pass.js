class GlowPass extends RenderPass {
    constructor(glContext) {
        super(glContext, "assets/shaders/post-vertex.glsl", "assets/shaders/post-glow-fragment.glsl", "CURVED");
    }

    setUniforms() {
        var timeLocation = this.passProgram.uniformLocation("time");
        var time =  GlobalVars.getInstance().curtime;
        this.ctx.uniform1f(timeLocation, time);
        super.setUniforms();
        super.setUniforms();
    }
}