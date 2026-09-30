/**
 * Tipos do banco gerados pelo Supabase (generate_typescript_types).
 * Para regenerar: npx supabase gen types typescript --project-id weweeivupzcktkufkunw > src/lib/database.types.ts
 */
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.18";
  };
  public: {
    Tables: {
      awards: {
        Row: {
          created_at: string;
          id: number;
          project: string;
          sort_order: number;
          title: string;
          year: number;
        };
        Insert: {
          created_at?: string;
          id?: never;
          project: string;
          sort_order?: number;
          title: string;
          year: number;
        };
        Update: {
          created_at?: string;
          id?: never;
          project?: string;
          sort_order?: number;
          title?: string;
          year?: number;
        };
        Relationships: [];
      };
      clients: {
        Row: {
          created_at: string;
          id: number;
          kind: string;
          name: string;
          sort_order: number;
        };
        Insert: {
          created_at?: string;
          id?: never;
          kind?: string;
          name: string;
          sort_order?: number;
        };
        Update: {
          created_at?: string;
          id?: never;
          kind?: string;
          name?: string;
          sort_order?: number;
        };
        Relationships: [];
      };
      contact_messages: {
        Row: {
          created_at: string;
          email: string;
          id: number;
          message: string;
          name: string;
          status: string;
          subject: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: never;
          message: string;
          name: string;
          status?: string;
          subject: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: never;
          message?: string;
          name?: string;
          status?: string;
          subject?: string;
        };
        Relationships: [];
      };
      posts: {
        Row: {
          author: string;
          body: Json;
          category: string;
          cover: Json;
          created_at: string;
          excerpt: string;
          id: number;
          published: boolean;
          published_on: string;
          reading_time: number;
          slug: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          author: string;
          body?: Json;
          category: string;
          cover: Json;
          created_at?: string;
          excerpt: string;
          id?: never;
          published?: boolean;
          published_on: string;
          reading_time?: number;
          slug: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          author?: string;
          body?: Json;
          category?: string;
          cover?: Json;
          created_at?: string;
          excerpt?: string;
          id?: never;
          published?: boolean;
          published_on?: string;
          reading_time?: number;
          slug?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          area: number;
          category: string;
          client: string;
          cover: Json;
          created_at: string;
          description: string[];
          featured: boolean;
          gallery: Json;
          id: number;
          location: string;
          name: string;
          published: boolean;
          slug: string;
          sort_order: number;
          summary: string;
          updated_at: string;
          year: number;
        };
        Insert: {
          area: number;
          category: string;
          client: string;
          cover: Json;
          created_at?: string;
          description?: string[];
          featured?: boolean;
          gallery?: Json;
          id?: never;
          location: string;
          name: string;
          published?: boolean;
          slug: string;
          sort_order?: number;
          summary: string;
          updated_at?: string;
          year: number;
        };
        Update: {
          area?: number;
          category?: string;
          client?: string;
          cover?: Json;
          created_at?: string;
          description?: string[];
          featured?: boolean;
          gallery?: Json;
          id?: never;
          location?: string;
          name?: string;
          published?: boolean;
          slug?: string;
          sort_order?: number;
          summary?: string;
          updated_at?: string;
          year?: number;
        };
        Relationships: [];
      };
      services: {
        Row: {
          created_at: string;
          deliverables: string[];
          description: string;
          id: number;
          lead: string;
          slug: string;
          sort_order: number;
          title: string;
        };
        Insert: {
          created_at?: string;
          deliverables?: string[];
          description: string;
          id?: never;
          lead: string;
          slug: string;
          sort_order?: number;
          title: string;
        };
        Update: {
          created_at?: string;
          deliverables?: string[];
          description?: string;
          id?: never;
          lead?: string;
          slug?: string;
          sort_order?: number;
          title?: string;
        };
        Relationships: [];
      };
      team_members: {
        Row: {
          bio: string;
          created_at: string;
          id: number;
          name: string;
          photo_url: string;
          role: string;
          sort_order: number;
        };
        Insert: {
          bio: string;
          created_at?: string;
          id?: never;
          name: string;
          photo_url: string;
          role: string;
          sort_order?: number;
        };
        Update: {
          bio?: string;
          created_at?: string;
          id?: never;
          name?: string;
          photo_url?: string;
          role?: string;
          sort_order?: number;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

export type Tables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"];
