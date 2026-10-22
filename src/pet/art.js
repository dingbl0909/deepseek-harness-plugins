// Original layered artwork for the whale-girl companion.
// Every major body part is a separate <g class="wm-layer"> so the view can
// breathe life into it independently and pull the pieces apart in slice mode.
export const ART = /* html */ `
<svg class="wm-art" viewBox="0 0 240 320" role="img" aria-label="鲸鱼娘小汐">
  <defs>
    <linearGradient id="wmHair" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0" stop-color="#526bd6"/>
      <stop offset="0.45" stop-color="#31428f"/>
      <stop offset="1" stop-color="#1b275f"/>
    </linearGradient>
    <linearGradient id="wmHairLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#a4b9ff"/>
      <stop offset="1" stop-color="#5c78e6"/>
    </linearGradient>
    <linearGradient id="wmSkin" x1="0" y1="0" x2="0.2" y2="1">
      <stop offset="0" stop-color="#fff3eb"/>
      <stop offset="0.7" stop-color="#ffe1d5"/>
      <stop offset="1" stop-color="#ffd2c4"/>
    </linearGradient>
    <linearGradient id="wmIris" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#b8fbff"/>
      <stop offset="0.35" stop-color="#54dcf1"/>
      <stop offset="0.72" stop-color="#2f8ee0"/>
      <stop offset="1" stop-color="#1b3f9d"/>
    </linearGradient>
    <linearGradient id="wmFin" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0" stop-color="#a9fbff"/>
      <stop offset="0.5" stop-color="#4dd5e8"/>
      <stop offset="1" stop-color="#1b7fae"/>
    </linearGradient>
    <linearGradient id="wmTail" x1="0" y1="0" x2="1" y2="0.7">
      <stop offset="0" stop-color="#4159b4"/>
      <stop offset="0.6" stop-color="#26377e"/>
      <stop offset="1" stop-color="#141e4b"/>
    </linearGradient>
    <linearGradient id="wmDress" x1="0" y1="0" x2="0.2" y2="1">
      <stop offset="0" stop-color="#3a4b8c"/>
      <stop offset="1" stop-color="#18234f"/>
    </linearGradient>
    <linearGradient id="wmWhite" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#dbe8ff"/>
    </linearGradient>
    <radialGradient id="wmBlush" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#ff9aa6" stop-opacity="0.72"/>
      <stop offset="1" stop-color="#ff9aa6" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- ground shadow -->
  <ellipse class="wm-ground" cx="120" cy="303" rx="55" ry="9" fill="#243a72" opacity="0.16"/>

  <!-- ══ 尾巴 / tail ══ -->
  <g class="wm-layer wm-layer-tail" data-part="tail">
    <g id="wmTail">
      <path d="M144 258 C167 258 188 246 197 228 C201 220 204 215 209 211 L216 220 C206 235 197 250 183 260 C171 269 156 272 146 270 Z"
        fill="url(#wmTail)" stroke="#121c42" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M207 211 C213 197 223 186 234 182 C241 180 244 186 241 194 C237 203 227 209 216 212 C225 215 233 222 236 230 C238 238 232 243 226 239 C217 233 210 223 207 211 Z"
        fill="url(#wmTail)" stroke="#121c42" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M158 258 C180 253 194 241 201 226" fill="none" stroke="#8fa9ff" stroke-width="1.6" opacity="0.68"/>
      <path d="M213 209 C221 198 229 191 236 188 M214 214 C222 218 228 224 231 231"
        fill="none" stroke="#8fb2ff" stroke-width="1.1" opacity="0.55" stroke-linecap="round"/>
    </g>
  </g>

  <!-- ══ 后发 / back hair ══ -->
  <g class="wm-layer wm-layer-hair" data-part="hair">
    <g id="wmHairBack">
      <path d="M120 62 C85 62 62 88 60 126 C58 160 51 214 44 252 C40 271 50 283 62 275 C74 267 79 242 83 216 L86 266 C88 283 102 289 112 275 C118 265 120 246 121 226 L119 226 C120 246 122 265 128 275 C138 289 152 283 154 266 L157 216 C161 242 166 267 178 275 C190 283 200 271 196 252 C189 214 182 160 180 126 C178 88 155 62 120 62 Z"
        fill="url(#wmHair)" stroke="#151f4b" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M70 128 C64 172 57 226 50 258" fill="none" stroke="#6d86ea" stroke-width="2" opacity="0.34" stroke-linecap="round"/>
      <path d="M170 128 C176 172 183 226 190 258" fill="none" stroke="#6d86ea" stroke-width="2" opacity="0.34" stroke-linecap="round"/>
      <path d="M60 258 C67 262 74 258 78 249" fill="none" stroke="#9db3ff" stroke-width="1.4" opacity="0.4" stroke-linecap="round"/>
      <path d="M180 258 C173 262 166 258 162 249" fill="none" stroke="#9db3ff" stroke-width="1.4" opacity="0.4" stroke-linecap="round"/>
    </g>
  </g>

  <!-- ══ 身体 / body ══ -->
  <g class="wm-layer wm-layer-body" data-part="body">
    <g id="wmBody">
      <!-- torso -->
      <path d="M93 198 C103 191 137 191 147 198 L153 241 C153 252 141 258 120 258 C99 258 87 252 87 241 Z"
        fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.2" stroke-linejoin="round"/>

      <!-- sailor collar -->
      <path d="M92 198 C101 206 110 210 120 210 C130 210 139 206 148 198 L158 213 L120 244 L82 213 Z"
        fill="url(#wmDress)" stroke="#121c42" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M88 213 L120 241 L152 213" fill="none" stroke="#8ceef7" stroke-width="2" opacity="0.9"/>

      <!-- neckerchief -->
      <path d="M120 230 C112 219 99 224 101 234 C103 243 113 244 120 238 C127 244 137 243 139 234 C141 224 128 219 120 230 Z"
        fill="#57dcec" stroke="#167a9d" stroke-width="0.9"/>
      <circle cx="120" cy="233" r="4.2" fill="#b6fbff" stroke="#167a9d" stroke-width="0.9"/>

      <!-- skirt -->
      <path d="M95 250 L145 250 L158 287 C142 296 98 296 82 287 Z"
        fill="url(#wmDress)" stroke="#121c42" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M104 253 L97 289 M114 253 L110 292 M126 253 L130 292 M136 253 L143 289"
        fill="none" stroke="#6d84d8" stroke-width="1" opacity="0.75"/>
      <path d="M85 285 C104 292 136 292 155 285" fill="none" stroke="#7ceaf6" stroke-width="2" opacity="0.9"/>

      <!-- legs -->
      <rect x="102" y="286" width="15" height="23" rx="7.5" fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.1"/>
      <rect x="123" y="286" width="15" height="23" rx="7.5" fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.1"/>
      <path d="M102 296 L117 296 M123 296 L138 296" stroke="#7ceaf6" stroke-width="1.6"/>

      <!-- shoes -->
      <path d="M99 304 C99 299 107 297 112 300 L117 312 C113 315 103 315 100 312 Z"
        fill="#20305f" stroke="#121c42" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M141 304 C141 299 133 297 128 300 L123 312 C127 315 137 315 140 312 Z"
        fill="#20305f" stroke="#121c42" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M101 309 L113 309 M127 309 L139 309" stroke="#8ceef7" stroke-width="1.2" opacity="0.85"/>
    </g>
  </g>

  <!-- ══ 手臂 / arms ══ -->
  <g class="wm-layer wm-layer-armL" data-part="arms">
    <g id="wmArmL">
      <path d="M97 203 C89 210 83 224 81 239 C80 248 85 253 91 251 C97 249 99 241 101 233 L105 211 Z"
        fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.2" stroke-linejoin="round"/>
      <circle cx="88" cy="247" r="7" fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>
      <path d="M84 246 C86 249 90 250 93 248" fill="none" stroke="#e9a89b" stroke-width="0.9" opacity="0.8"/>
    </g>
  </g>

  <g class="wm-layer wm-layer-armR" data-part="arms">
    <g id="wmArmR">
      <path d="M143 203 C151 210 157 224 159 239 C160 248 155 253 149 251 C143 249 141 241 139 233 L135 211 Z"
        fill="url(#wmWhite)" stroke="#18244e" stroke-width="1.2" stroke-linejoin="round"/>
      <circle cx="152" cy="247" r="7" fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>
      <path d="M156 246 C154 249 150 250 147 248" fill="none" stroke="#e9a89b" stroke-width="0.9" opacity="0.8"/>
    </g>
  </g>

  <!-- ══ 头部 / head ══ -->
  <g class="wm-layer wm-layer-head" data-part="head">
    <g id="wmHead">
      <!-- neck (belongs to the head layer so the slice view stays articulated) -->
      <g class="wm-neck">
        <path d="M109 170 L131 170 L133 199 C126 204 114 204 107 199 Z"
          fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>
        <path d="M109 177 C116 185 124 185 131 177 L131 191 C124 195 116 195 109 191 Z" fill="#f2b6a8" opacity="0.5"/>
      </g>

      <!-- ears -->
      <path d="M69 126 C60 120 53 130 58 138 C62 144 69 143 73 137 Z"
        fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>
      <path d="M171 126 C180 120 187 130 182 138 C178 144 171 143 167 137 Z"
        fill="url(#wmSkin)" stroke="#dda397" stroke-width="1"/>

      <!-- face -->
      <path d="M120 73 C88 73 64 93 63 125 C62 150 80 173 103 179 C110 181 130 181 137 179 C160 173 178 150 177 125 C176 93 152 73 120 73 Z"
        fill="url(#wmSkin)" stroke="#dda397" stroke-width="1.1"/>

      <!-- cheek blush -->
      <ellipse cx="82" cy="153" rx="13" ry="6" fill="url(#wmBlush)"/>
      <ellipse cx="158" cy="153" rx="13" ry="6" fill="url(#wmBlush)"/>
      <path d="M77 151 L79 156 M83 150 L85 155 M89 151 L91 156 M153 151 L155 156 M159 150 L161 155 M165 151 L167 156"
        stroke="#ff9aa6" stroke-width="0.8" opacity="0.55" stroke-linecap="round"/>

      <!-- eyebrows -->
      <g class="wm-brows">
        <path d="M85 113 Q97 107 108 112" fill="none" stroke="#3b4779" stroke-width="2.3" stroke-linecap="round"/>
        <path d="M132 112 Q143 107 155 113" fill="none" stroke="#3b4779" stroke-width="2.3" stroke-linecap="round"/>
      </g>
      <g class="wm-brows-focus">
        <path d="M85 110 Q96 112 108 117" fill="none" stroke="#34406e" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M155 110 Q144 112 132 117" fill="none" stroke="#34406e" stroke-width="2.4" stroke-linecap="round"/>
      </g>

      <!-- open eyes -->
      <g class="wm-eyes-open">
        <g class="wm-eye" id="wmEyeL">
          <ellipse cx="97" cy="138" rx="15.5" ry="17" fill="#fffdfd" stroke="#24305e" stroke-width="0.7"/>
          <ellipse cx="97" cy="139.5" rx="11.6" ry="14.4" fill="url(#wmIris)" stroke="#1d326f" stroke-width="0.8"/>
          <ellipse cx="97" cy="141" rx="5.6" ry="8.8" fill="#101b3f"/>
          <ellipse cx="97" cy="146.5" rx="8" ry="4.6" fill="#8bf6ff" opacity="0.5"/>
          <circle cx="93" cy="133" r="4.1" fill="#ffffff"/>
          <circle cx="101" cy="143" r="2" fill="#ffffff" opacity="0.9"/>
          <path d="M83 130 C87 119 96 114 105 117 C111 119 115 125 116 131" fill="none"
            stroke="#18224c" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M114 126 L120 122" stroke="#18224c" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M85 154 Q97 160 109 154" fill="none" stroke="#b77d75" stroke-width="1" opacity="0.45" stroke-linecap="round"/>
        </g>
        <g class="wm-eye" id="wmEyeR">
          <ellipse cx="143" cy="138" rx="15.5" ry="17" fill="#fffdfd" stroke="#24305e" stroke-width="0.7"/>
          <ellipse cx="143" cy="139.5" rx="11.6" ry="14.4" fill="url(#wmIris)" stroke="#1d326f" stroke-width="0.8"/>
          <ellipse cx="143" cy="141" rx="5.6" ry="8.8" fill="#101b3f"/>
          <ellipse cx="143" cy="146.5" rx="8" ry="4.6" fill="#8bf6ff" opacity="0.5"/>
          <circle cx="139" cy="133" r="4.1" fill="#ffffff"/>
          <circle cx="147" cy="143" r="2" fill="#ffffff" opacity="0.9"/>
          <path d="M157 130 C153 119 144 114 135 117 C129 119 125 125 124 131" fill="none"
            stroke="#18224c" stroke-width="3.4" stroke-linecap="round"/>
          <path d="M126 126 L120 122" stroke="#18224c" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M131 154 Q143 160 155 154" fill="none" stroke="#b77d75" stroke-width="1" opacity="0.45" stroke-linecap="round"/>
        </g>
        <g class="wm-pupils">
          <circle cx="97" cy="141" r="5.4" fill="#0d1736"/>
          <circle cx="143" cy="141" r="5.4" fill="#0d1736"/>
          <circle cx="95.4" cy="139.4" r="1.5" fill="#7fefff"/>
          <circle cx="141.4" cy="139.4" r="1.5" fill="#7fefff"/>
        </g>
      </g>

      <!-- closed / happy eyes -->
      <g class="wm-eyes-closed">
        <path d="M82 139 Q97 151 112 139" fill="none" stroke="#2a3660" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M128 139 Q143 151 158 139" fill="none" stroke="#2a3660" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M85 152 Q97 158 109 152" fill="none" stroke="#b77d75" stroke-width="1" opacity="0.4" stroke-linecap="round"/>
        <path d="M131 152 Q143 158 155 152" fill="none" stroke="#b77d75" stroke-width="1" opacity="0.4" stroke-linecap="round"/>
      </g>

      <!-- nose -->
      <path d="M118 153 Q120 155 122 153" fill="none" stroke="#d89a8f" stroke-width="1.1" stroke-linecap="round"/>

      <!-- mouths -->
      <g class="wm-mouth wm-mouth-smile">
        <path d="M113 162 Q120 169 127 162" fill="none" stroke="#b45460" stroke-width="2.1" stroke-linecap="round"/>
      </g>
      <g class="wm-mouth wm-mouth-flat">
        <path d="M113 163 Q120 165 127 163" fill="none" stroke="#b45460" stroke-width="2.1" stroke-linecap="round"/>
      </g>
      <g class="wm-mouth wm-mouth-o">
        <ellipse cx="120" cy="164" rx="4" ry="5" fill="#b45460"/>
        <ellipse cx="120" cy="166" rx="2.4" ry="2" fill="#ff9aa6" opacity="0.7"/>
      </g>
      <g class="wm-mouth wm-mouth-grin">
        <path d="M111 160 Q120 172 129 160 Z" fill="#b45460" stroke="#8e3a49" stroke-width="1" stroke-linejoin="round"/>
        <path d="M114 163 Q120 167 126 163" fill="#ff8fa0"/>
      </g>
      <g class="wm-mouth wm-mouth-sleep">
        <path d="M115 164 Q120 167 125 164" fill="none" stroke="#b45460" stroke-width="2" stroke-linecap="round"/>
      </g>

      <!-- front hair cap + bangs -->
      <path d="M120 61 C88 61 63 84 61 120 C60 135 63 148 69 158 C71 145 73 132 79 122 C83 116 88 112 94 109 C97 119 103 126 109 130 C108 118 110 108 115 100 C119 111 125 118 132 122 C134 110 138 101 144 94 C146 106 151 115 158 121 C164 127 168 140 170 158 C176 148 179 135 177 120 C175 84 152 61 120 61 Z"
        fill="url(#wmHair)" stroke="#151f4b" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M76 122 C82 136 92 146 104 150 M146 94 C148 110 155 124 165 134" fill="none"
        stroke="#8fa8ff" stroke-width="1.5" opacity="0.5" stroke-linecap="round"/>
      <path d="M87 104 C92 96 98 91 105 88 M129 88 C136 92 141 99 145 107" fill="none"
        stroke="#b7c6ff" stroke-width="1.3" opacity="0.5" stroke-linecap="round"/>
      <path d="M69 92 C76 80 88 72 102 68 M157 79 C164 85 170 94 173 103" fill="none"
        stroke="#c9d5ff" stroke-width="1.1" opacity="0.35" stroke-linecap="round"/>
      <path d="M120 62 C114 54 113 47 116 42 M124 64 C128 56 135 51 141 50" fill="none"
        stroke="#9fb5ff" stroke-width="1" opacity="0.3" stroke-linecap="round"/>

      <!-- side locks -->
      <path d="M64 114 C58 139 58 163 63 183 C66 193 78 194 83 183 C88 171 86 149 84 132 Z"
        fill="url(#wmHair)" stroke="#151f4b" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M176 114 C182 139 182 163 177 183 C174 193 162 194 157 183 C152 171 154 149 156 132 Z"
        fill="url(#wmHair)" stroke="#151f4b" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M69 136 C67 154 68 170 71 180" fill="none" stroke="#7892f0" stroke-width="1.3" opacity="0.55"/>
      <path d="M171 136 C173 154 172 170 169 180" fill="none" stroke="#7892f0" stroke-width="1.3" opacity="0.55"/>

      <!-- ahoge -->
      <path d="M115 63 C107 49 115 38 128 41 C140 44 142 57 133 61 C128 63 125 58 130 55"
        fill="none" stroke="#151f4b" stroke-width="6.4" stroke-linecap="round"/>
      <path d="M115 63 C107 49 115 38 128 41 C140 44 142 57 133 61 C128 63 125 58 130 55"
        fill="none" stroke="url(#wmHairLight)" stroke-width="4" stroke-linecap="round"/>

      <!-- whale-fin hair ornaments -->
      <g class="wm-finL">
        <path d="M76 103 C58 92 39 99 36 113 C34 124 43 133 55 134 C49 138 51 145 60 146 C72 147 82 137 81 125 C80 116 78 108 76 103 Z"
          fill="url(#wmFin)" stroke="#146184" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M45 111 C54 118 63 128 68 140 M55 106 C62 112 68 122 72 133"
          fill="none" stroke="#d4fdff" stroke-width="1.3" opacity="0.6" stroke-linecap="round"/>
        <circle cx="77" cy="108" r="2.6" fill="#e1feff" stroke="#146184" stroke-width="0.7"/>
      </g>
      <g class="wm-finR">
        <path d="M164 103 C182 92 201 99 204 113 C206 124 197 133 185 134 C191 138 189 145 180 146 C168 147 158 137 159 125 C160 116 162 108 164 103 Z"
          fill="url(#wmFin)" stroke="#146184" stroke-width="1.2" stroke-linejoin="round"/>
        <path d="M195 111 C186 118 177 128 172 140 M185 106 C178 112 172 122 168 133"
          fill="none" stroke="#d4fdff" stroke-width="1.3" opacity="0.6" stroke-linecap="round"/>
        <circle cx="163" cy="108" r="2.6" fill="#e1feff" stroke="#146184" stroke-width="0.7"/>
      </g>

      <!-- tiny whale-tail hair clip -->
      <g transform="translate(150 94) rotate(14)">
        <g class="wm-clip">
          <path d="M0 0 C-7 -7 -8 -14 -3 -16 C2 -18 5 -12 5 -7 C5 -12 8 -18 13 -16 C18 -14 16 -7 9 0 Z"
            fill="#7ceef8" stroke="#146184" stroke-width="0.9" stroke-linejoin="round"/>
          <circle cx="5" cy="1.2" r="1.8" fill="#e9feff" stroke="#146184" stroke-width="0.7"/>
        </g>
      </g>
    </g>
  </g>

  <!-- ══ 小情绪 / effects ══ -->
  <g class="wm-layer wm-layer-fx" data-part="fx">
    <g class="wm-bubbles">
      <g class="wm-bubble-a"><circle cx="44" cy="186" r="4.5" fill="#9df6ff" opacity="0.55"/><circle cx="42.5" cy="184.5" r="1.4" fill="#fff" opacity="0.9"/></g>
      <g class="wm-bubble-b"><circle cx="201" cy="150" r="6" fill="#9df6ff" opacity="0.45"/><circle cx="199" cy="148" r="1.9" fill="#fff" opacity="0.9"/></g>
      <g class="wm-bubble-c"><circle cx="212" cy="112" r="3.4" fill="#9df6ff" opacity="0.4"/><circle cx="211" cy="111" r="1.1" fill="#fff" opacity="0.85"/></g>
    </g>

    <g class="wm-question">
      <path d="M181 88 C181 78 197 77 197 88 C197 95 188 95 188 102" fill="none" stroke="#f8c85c" stroke-width="5" stroke-linecap="round"/>
      <circle cx="188" cy="111" r="3" fill="#f8c85c"/>
    </g>

    <g class="wm-zzz">
      <text x="174" y="92" class="wm-zzz-text">Z</text>
      <text x="187" y="76" class="wm-zzz-text wm-zzz-2">z</text>
      <text x="198" y="62" class="wm-zzz-text wm-zzz-3">z</text>
    </g>

    <g class="wm-hearts">
      <path class="wm-heart wm-heart-1" d="M60 150 C60 144 68 142 70 148 C72 142 80 144 80 150 C80 158 70 163 70 163 C70 163 60 158 60 150 Z" fill="#ff8fa8"/>
      <path class="wm-heart wm-heart-2" d="M182 128 C182 122 190 120 192 126 C194 120 202 122 202 128 C202 136 192 141 192 141 C192 141 182 136 182 128 Z" fill="#ffa9bd"/>
    </g>

    <g class="wm-sparkles">
      <path d="M55 108 L57 114 L63 116 L57 118 L55 124 L53 118 L47 116 L53 114 Z" fill="#ffd979"/>
      <path d="M190 178 L192 183 L197 185 L192 187 L190 192 L188 187 L183 185 L188 183 Z" fill="#a8f4ff"/>
      <path d="M182 72 L184 77 L189 79 L184 81 L182 86 L180 81 L175 79 L180 77 Z" fill="#ffd979"/>
    </g>
  </g>

  <!-- exploded-view labels -->
  <g class="wm-labels" aria-hidden="true">
    <g class="wm-label wm-label-hair"><rect x="4" y="100" width="34" height="15" rx="7.5"/><text x="21" y="111">后发</text><path d="M38 107 H54"/></g>
    <g class="wm-label wm-label-head"><rect x="198" y="92" width="34" height="15" rx="7.5"/><text x="215" y="103">头部</text><path d="M198 99 H186"/></g>
    <g class="wm-label wm-label-body"><rect x="4" y="236" width="34" height="15" rx="7.5"/><text x="21" y="247">身体</text><path d="M38 243 H68"/></g>
    <g class="wm-label wm-label-tail"><rect x="198" y="196" width="34" height="15" rx="7.5"/><text x="215" y="207">尾巴</text><path d="M198 203 H190"/></g>
  </g>
</svg>
`;
