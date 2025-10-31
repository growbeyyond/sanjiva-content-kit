export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      appointment_slots: {
        Row: {
          appointment_id: string | null
          created_at: string
          date: string
          end_time: string
          id: string
          is_available: boolean | null
          start_time: string
        }
        Insert: {
          appointment_id?: string | null
          created_at?: string
          date: string
          end_time: string
          id?: string
          is_available?: boolean | null
          start_time: string
        }
        Update: {
          appointment_id?: string | null
          created_at?: string
          date?: string
          end_time?: string
          id?: string
          is_available?: boolean | null
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointment_slots_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          condition: string
          created_at: string | null
          email: string | null
          id: string
          message: string | null
          name: string
          phone: string
          preferred_date: string | null
          preferred_time: string | null
          status: string | null
        }
        Insert: {
          condition: string
          created_at?: string | null
          email?: string | null
          id?: string
          message?: string | null
          name: string
          phone: string
          preferred_date?: string | null
          preferred_time?: string | null
          status?: string | null
        }
        Update: {
          condition?: string
          created_at?: string | null
          email?: string | null
          id?: string
          message?: string | null
          name?: string
          phone?: string
          preferred_date?: string | null
          preferred_time?: string | null
          status?: string | null
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          created_at: string
          id: string
          is_admin_reply: boolean | null
          is_read: boolean | null
          message: string
          parent_message_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_admin_reply?: boolean | null
          is_read?: boolean | null
          message: string
          parent_message_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_admin_reply?: boolean | null
          is_read?: boolean | null
          message?: string
          parent_message_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_parent_message_id_fkey"
            columns: ["parent_message_id"]
            isOneToOne: false
            referencedRelation: "chat_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_inquiries: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          message: string
          name: string
          phone: string
          status: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          message: string
          name: string
          phone: string
          status?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          message?: string
          name?: string
          phone?: string
          status?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          image_url: string
          is_active: boolean | null
          title: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_active?: boolean | null
          title: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          title?: string
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          active: boolean | null
          email: string
          id: string
          subscribed_at: string | null
        }
        Insert: {
          active?: boolean | null
          email: string
          id?: string
          subscribed_at?: string | null
        }
        Update: {
          active?: boolean | null
          email?: string
          id?: string
          subscribed_at?: string | null
        }
        Relationships: []
      }
      patients: {
        Row: {
          allergies: string | null
          blood_group: string | null
          created_at: string
          current_medications: string | null
          date_of_birth: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          full_name: string
          gender: string | null
          id: string
          medical_history: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          allergies?: string | null
          blood_group?: string | null
          created_at?: string
          current_medications?: string | null
          date_of_birth?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          full_name: string
          gender?: string | null
          id?: string
          medical_history?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          allergies?: string | null
          blood_group?: string | null
          created_at?: string
          current_medications?: string | null
          date_of_birth?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          full_name?: string
          gender?: string | null
          id?: string
          medical_history?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          appointment_id: string | null
          created_at: string
          currency: string | null
          id: string
          patient_id: string | null
          payment_date: string | null
          payment_method: string | null
          payment_status: string | null
          transaction_id: string | null
        }
        Insert: {
          amount: number
          appointment_id?: string | null
          created_at?: string
          currency?: string | null
          id?: string
          patient_id?: string | null
          payment_date?: string | null
          payment_method?: string | null
          payment_status?: string | null
          transaction_id?: string | null
        }
        Update: {
          amount?: number
          appointment_id?: string | null
          created_at?: string
          currency?: string | null
          id?: string
          patient_id?: string | null
          payment_date?: string | null
          payment_method?: string | null
          payment_status?: string | null
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      prescriptions: {
        Row: {
          appointment_id: string | null
          created_at: string
          diagnosis: string | null
          follow_up_date: string | null
          id: string
          instructions: string | null
          medicines: Json | null
          patient_id: string
          prescribed_by: string | null
        }
        Insert: {
          appointment_id?: string | null
          created_at?: string
          diagnosis?: string | null
          follow_up_date?: string | null
          id?: string
          instructions?: string | null
          medicines?: Json | null
          patient_id: string
          prescribed_by?: string | null
        }
        Update: {
          appointment_id?: string | null
          created_at?: string
          diagnosis?: string | null
          follow_up_date?: string | null
          id?: string
          instructions?: string | null
          medicines?: Json | null
          patient_id?: string
          prescribed_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prescriptions_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prescriptions_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      symptom_checker_results: {
        Row: {
          created_at: string
          id: string
          recommended_treatment: string | null
          severity_level: string | null
          symptoms: Json
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          recommended_treatment?: string | null
          severity_level?: string | null
          symptoms: Json
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          recommended_treatment?: string | null
          severity_level?: string | null
          symptoms?: Json
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
