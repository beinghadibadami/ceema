import fs from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import ffmpeg from 'ffmpeg-static';
const dir = 'public/images';
const exists = async name => fs.access(`${dir}/${name}`).then(()=>true).catch(()=>false);
if (!(await exists('hero-start.webp')) || !(await exists('hero-mid.webp'))) { console.log('Hero storyboard frames are not available; retain the static final-frame fallback.'); process.exit(0); }
const inputs=['-y','-loop','1','-t','1.8','-i',`${dir}/hero-start.webp`,'-loop','1','-t','1.8','-i',`${dir}/hero-mid.webp`,'-loop','1','-t','2.2','-i',`${dir}/hero-splash.webp`];
const filters='[0:v]fps=24,format=yuv420p,setsar=1[a];[1:v]fps=24,format=yuv420p,setsar=1[b];[2:v]fps=24,format=yuv420p,setsar=1[c];[a][b]xfade=transition=fade:duration=0.65:offset=1.15[ab];[ab][c]xfade=transition=fade:duration=0.7:offset=2.25[v]';
for(const format of ['mp4','webm']) {const codec=format==='mp4'?['-c:v','libx264','-crf','23','-preset','fast','-movflags','+faststart']:['-c:v','libvpx-vp9','-crf','34','-b:v','0','-row-mt','1'];const result=spawnSync(ffmpeg,[...inputs,'-filter_complex',filters,'-map','[v]','-an',...codec,`${dir}/hero-reveal.${format}`],{stdio:'pipe'});if(result.status!==0){console.error(result.stderr.toString().slice(-2500));process.exit(1)}console.log(`Rendered hero-reveal.${format}`);}
