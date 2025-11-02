import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const SymptomChecker = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1); // 1: Condition selection, 2: Symptoms
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const conditions = [
    { value: "pcos", label: "PCOS / Hormonal Imbalance", description: "Irregular periods, weight gain, acne, hair issues" },
    { value: "thyroid", label: "Thyroid Issues", description: "Fatigue, weight changes, mood swings, hair loss" },
    { value: "both", label: "Both PCOS & Thyroid", description: "Multiple hormonal concerns" },
    { value: "other", label: "Other Women's Health", description: "General wellness, fertility, menopause" }
  ];

  const symptomCategories = [
    {
      category: "Menstrual & Reproductive",
      symptoms: ["Irregular periods", "Heavy bleeding", "Painful periods", "Missed periods", "Spotting", "Infertility concerns"]
    },
    {
      category: "Hormonal",
      symptoms: ["Weight gain", "Weight loss", "Acne", "Excessive hair growth", "Hair loss", "Mood swings"]
    },
    {
      category: "Energy & Metabolism",
      symptoms: ["Chronic fatigue", "Low energy", "Cold sensitivity", "Heat sensitivity", "Brain fog", "Memory issues"]
    },
    {
      category: "Skin & Hair",
      symptoms: ["Acne breakouts", "Dry skin", "Oily skin", "Hair thinning", "Facial hair growth", "Dark patches"]
    },
    {
      category: "Digestive & Metabolic",
      symptoms: ["Bloating", "Constipation", "Food cravings", "Insulin resistance", "Blood sugar fluctuations"]
    },
    {
      category: "Mental & Emotional",
      symptoms: ["Anxiety", "Depression", "Insomnia", "Stress", "Irritability", "Low self-esteem"]
    }
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleConditionSelect = (condition: string) => {
    setSelectedCondition(condition);
    setStep(2);
  };

  const analyzeSymptoms = async () => {
    if (selectedSymptoms.length === 0) {
      toast({
        title: "Please select symptoms",
        description: "Select at least one symptom to continue",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    const severityLevel = selectedSymptoms.length > 5 ? "high" : selectedSymptoms.length > 2 ? "medium" : "low";
    
    let recommendedTreatment = "";
    let program = "";
    
    if (selectedCondition === "pcos") {
      recommendedTreatment = "Your symptoms indicate PCOS-related hormonal imbalance. Our PCOS Reset Program uses personalized homeopathy, nutrition planning, and lifestyle optimization to restore balance naturally.";
      program = "PCOS Care Program";
    } else if (selectedCondition === "thyroid") {
      recommendedTreatment = "Your symptoms suggest thyroid imbalance. The ThyroCure Method addresses the root cause through detox, homeopathy, nutrient support, and emotional healing — without lifelong medication dependency.";
      program = "ThyroCure Program";
    } else if (selectedCondition === "both") {
      recommendedTreatment = "You're experiencing multiple hormonal imbalances. Our comprehensive approach addresses both PCOS and thyroid issues simultaneously for complete hormonal harmony.";
      program = "Combined Hormone Balance Program";
    } else {
      recommendedTreatment = "Based on your symptoms, personalized homeopathic treatment can help restore your hormonal balance and overall wellness. Book a consultation for a comprehensive evaluation.";
      program = "Personalized Women's Wellness";
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        await supabase.from("symptom_checker_results").insert({
          user_id: user.id,
          symptoms: selectedSymptoms,
          recommended_treatment: recommendedTreatment,
          severity_level: severityLevel
        });
      }

      setResult({
        severity: severityLevel,
        treatment: recommendedTreatment,
        symptoms: selectedSymptoms,
        condition: selectedCondition,
        program: program
      });
    } catch (error) {
      console.error("Error saving results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Symptom Checker - Dr. Prasanna Boddupally | Find Right Treatment</title>
        <meta name="description" content="Check your symptoms and get personalized homeopathic treatment recommendations from Dr. Prasanna Boddupally in Hyderabad." />
        <link rel="canonical" href="https://drprasanna.lovable.app/symptom-checker" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Hormone Health Assessment
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get personalized treatment recommendations in 2 simple steps
            </p>
          </div>

          {!result ? (
            <>
              {/* Step 1: Condition Selection */}
              {step === 1 && (
                <div className="space-y-6 mb-8">
                  <h2 className="text-2xl font-bold text-center text-foreground">
                    Step 1: What's your primary concern?
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {conditions.map((condition) => (
                      <Card
                        key={condition.value}
                        className="p-6 cursor-pointer hover:shadow-soft hover:border-primary transition-all"
                        onClick={() => handleConditionSelect(condition.value)}
                      >
                        <h3 className="text-xl font-bold text-foreground mb-2">{condition.label}</h3>
                        <p className="text-sm text-muted-foreground">{condition.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Symptom Selection */}
              {step === 2 && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">
                      Step 2: Select your symptoms
                    </h2>
                    <Button variant="outline" onClick={() => { setStep(1); setSelectedSymptoms([]); }}>
                      Change Condition
                    </Button>
                  </div>
                  <div className="space-y-8 mb-8">
                    {symptomCategories.map((category) => (
                    <Card key={category.category}>
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                        <CardDescription>Select symptoms you're experiencing</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {category.symptoms.map((symptom) => (
                            <div key={symptom} className="flex items-center space-x-2">
                              <Checkbox
                                id={symptom}
                                checked={selectedSymptoms.includes(symptom)}
                                onCheckedChange={() => toggleSymptom(symptom)}
                              />
                              <label
                                htmlFor={symptom}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                              >
                                {symptom}
                              </label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    ))}
                  </div>

                  {selectedSymptoms.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">Selected Symptoms:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedSymptoms.map((symptom) => (
                          <Badge key={symptom} variant="secondary">
                            {symptom}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <Button
                      size="lg"
                      onClick={analyzeSymptoms}
                      disabled={loading || selectedSymptoms.length === 0}
                      className="bg-gradient-hero hover:opacity-90"
                    >
                      {loading ? "Analyzing..." : "Get Your Personalized Plan"}
                    </Button>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="space-y-6">
              <Card className="border-primary/20 bg-gradient-subtle">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                    Your Personalized Assessment
                  </CardTitle>
                  <CardDescription className="text-base">
                    Based on your {result.symptoms.length} selected symptoms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-primary-light p-6 rounded-lg">
                    <h3 className="font-bold text-primary text-xl mb-3">Recommended Program:</h3>
                    <p className="text-lg font-semibold text-foreground mb-2">{result.program}</p>
                    <p className="text-muted-foreground leading-relaxed">{result.treatment}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-foreground">Your Selected Symptoms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.symptoms.map((symptom: string) => (
                        <Badge key={symptom} variant="secondary" className="text-sm">{symptom}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold mb-3 text-foreground">Next Steps:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Book a detailed consultation with Dr. Prasanna</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Get personalized homeopathic treatment plan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Receive nutrition and lifestyle guidance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Note:</strong> This assessment provides general guidance based on common symptom patterns. 
                      A comprehensive consultation is essential for accurate diagnosis and personalized treatment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-gradient-hero flex-1">
                        <a href="/contact">Book Your Consultation Now</a>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setResult(null);
                          setSelectedSymptoms([]);
                          setStep(1);
                          setSelectedCondition("");
                        }}
                        className="flex-1"
                      >
                        Take Assessment Again
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SymptomChecker;
