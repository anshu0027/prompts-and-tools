export interface PromptEntry {
  id: number;
  title: string;
  part: string;
  description: string;
  content: string;
}

export interface PlaybookPart {
  title: string;
  range: string;
  prompts: PromptEntry[];
}

export interface VibeTool {
  name: string;
  url: string;
}

export interface VibeToolsCategory {
  category: string;
  tools: VibeTool[];
}
