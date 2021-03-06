interface Window {
  cyScriptConfigs: CyScriptConfigs;
}

declare var cyScriptConfigs: CyScriptConfigs;
 
class CyScriptConfigs {
  configs: Map<string, CyScriptConfig> = new Map();
  config: CyScriptConfig;

  addConfig(roomId: string, config: CyScriptConfig) {
    this.configs.set(roomId.toLowerCase(), config);
  }

  setConfig(roomId: string) {
    this.config = this.configs.get(roomId.toLowerCase());
  }

  getConfig(roomId: string): CyScriptConfig | undefined {
    return this.configs.get(roomId.toLowerCase());
  }
}

interface RoomInfo {
  roomId: string | null;
  roomTitle?: string | null;
}

interface HeaderLink {
  href: string;
  icon?: string | null;
  text?: string | null;
}

interface CyScriptConfig {
  roomInfo: RoomInfo;
  headerLogo?: string | null;
  banners?: string[];
  otherRooms?: string[];
  headerLinks?: HeaderLink[];
}

window.cyScriptConfigs = new CyScriptConfigs();