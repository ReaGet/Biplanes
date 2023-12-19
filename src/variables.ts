export const screen = {
  size:{
    x: window.innerWidth,
    y: window.innerHeight,
  }
};

export const text = {
  size: {
    x: screen.size.x / 32,
    y: screen.size.y / 26,
  }
};

export const button = {
  size: {
    x: screen.size.x - screen.size.x * 0.016,
    y: screen.size.y * 0.0577,
  }
};

export const ground_collision = {
  y: screen.size.y * 0.875,
};

export const plane = {
  size: {
    y: screen.size.y * 0.11538,
    x: screen.size.x * 0.0935,
  },
  max_speed: {
    def: screen.size.x * 0.303,
    acc: screen.size.x * 0.43478,
  },
  increment: {
    speed: screen.size.y * 0.5,
    rot: 22.5,
  },
  dead_cooldown_time: 3,
  spawn_protection_time: 2,
  pitch_cooldown_time: 0.1,
  fire_cooldown_time: 0.65,

  blue_landx: screen.size.x * 0.0625,
  red_landx: screen.size.x * 0.9375,
  plane_landy: screen.size.y * 0.8675,
};

export const smoke = {
  size: {
    x: screen.size.x * 0.05,
    y: screen.size.y * 0.0625,
  },
  frame_time: 0.1,
  anim_period: 1.0,
}

export const fire = {
  frame_time: 0.075,
};

export const explosion = {
  size: {
    x: screen.size.x * 0.15625,
    y: screen.size.y * 0.1923,
  },
  frame_time: 0.075,
};

export const bullet = {
  size: {
    x: screen.size.x * 0.0117,
    y: screen.size.y * 0.0144,
  },
  bullet_speed: screen.size.x * 0.77,
  ground_collision: screen.size.y * 0.895,
}

export const hit = {
  size: {
    x: screen.size.x * 0.035,
    y: screen.size.y * 0.038,
  },
  frame_time: 0.08,
};

export const pilot = {
  size: {
    x: screen.size.x * 0.0273,
    y: screen.size.y * 0.03365,
  },
  ground_y_pilot_collision: screen.size.y * 0.8925,
  eject_speed: screen.size.y * 0.45,
  gravity: screen.size.y * 0.2,
  chute: {
    size: {
      x: screen.size.x * 0.078,
      y: screen.size.y * 0.057,
    },
    gravity: screen.size.y * 0.2,
    speed: screen.size.x * 0.04,
    frame_time: 0.25,
  },
  run: {
    speed: screen.size.x * 0.1,
    frame_time: 0.075,
  },
  fall_frame_time: 0.1,
  angel: {
    size: {
      x: screen.size.x * 0.0273,
      y: screen.size.y * 0.0273,
    },
    frame_time: 0.138,
    ascent_speed: screen.size.y * 0.035,
  }
};

const barn_size_x = screen.size.x * 0.1367;
export const barn = {
  size: {
    x: barn_size_x,
    y: screen.size.y * 0.105769,
  },
  collision: {
    x: screen.size.x * 0.5 - barn_size_x * 0.5,
    y: screen.size.y * 0.788,
  },
  x_pilot_left_collision: screen.size.x * 0.5 - barn_size_x * 0.4,
  x_pilot_right_collision: screen.size.x * 0.5 + barn_size_x * 0.4,
  bullet_collision: {
    x: screen.size.x * 0.5 - screen.size.x * 0.475,
    y: screen.size.y * 0.81
  }
};