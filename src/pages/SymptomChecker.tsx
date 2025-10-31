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
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const symptomCategories = [
    {
      category: "Respiratory",
      symptoms: ["Cough", "Shortness of breath", "Chest pain", "Wheezing", "Nasal congestion"]
    },
    {
      category: "Digestive",
      symptoms: ["Nausea", "Vomiting", "Diarrhea", "Constipation", "Abdominal pain", "Loss of appetite"]
    },
    {
      category: "Skin",
      symptoms: ["Rash", "Itching", "Eczema", "Acne", "Psoriasis", "Hives"]
    },
    {
      category: "Mental/Emotional",
      symptoms: ["Anxiety", "Depression", "Insomnia", "Stress", "Mood swings", "Irritability"]
    },
    {
      category: "Musculoskeletal",
      symptoms: ["Joint pain", "Muscle pain", "Back pain", "Stiffness", "Weakness"]
    },
    {
      category: "General",
      symptoms: ["Fatigue", "Fever", "Headache", "Dizziness", "Weight loss", "Weight gain"]
    }
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
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
    
    // Simple algorithm for symptom analysis
    const severityLevel = selectedSymptoms.length > 5 ? "high" : selectedSymptoms.length > 2 ? "medium" : "low";
    
    let recommendedTreatment = "";
    if (selectedSymptoms.some(s => ["Anxiety", "Depression", "Insomnia", "Stress"].includes(s))) {
      recommendedTreatment = "Mental health conditions can be effectively treated with constitutional homeopathy. Consider booking a consultation for personalized treatment.";
    } else if (selectedSymptoms.some(s => ["Rash", "Itching", "Eczema", "Acne", "Psoriasis"].includes(s))) {
      recommendedTreatment = "Skin conditions respond well to homeopathic treatment. We address the root cause rather than just suppressing symptoms.";
    } else if (selectedSymptoms.some(s => ["Cough", "Shortness of breath", "Wheezing", "Nasal congestion"].includes(s))) {
      recommendedTreatment = "Respiratory issues can be managed with homeopathy. Book a consultation for detailed case analysis.";
    } else {
      recommendedTreatment = "Based on your symptoms, homeopathic treatment can help. Schedule a consultation for a comprehensive evaluation.";
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
        symptoms: selectedSymptoms
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
                Symptom Checker
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select your symptoms below to get personalized treatment recommendations
              </p>
            </div>

            {!result ? (
              <>
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
                    {loading ? "Analyzing..." : "Analyze Symptoms"}
                  </Button>
                </div>
              </>
            ) : (
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {result.severity === "high" ? (
                      <AlertCircle className="h-6 w-6 text-destructive" />
                    ) : (
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    )}
                    Analysis Results
                  </CardTitle>
                  <CardDescription>
                    Severity Level: <Badge variant={result.severity === "high" ? "destructive" : "secondary"}>
                      {result.severity.toUpperCase()}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Your Symptoms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {result.symptoms.map((symptom: string) => (
                        <Badge key={symptom} variant="outline">{symptom}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Recommended Treatment:</h3>
                    <p className="text-muted-foreground leading-relaxed">{result.treatment}</p>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Disclaimer:</strong> This symptom checker is for informational purposes only and does not replace professional medical diagnosis. Please consult Dr. Prasanna for a comprehensive evaluation.
                    </p>
                    <div className="flex gap-3">
                      <Button asChild>
                        <a href="/contact">Book Consultation</a>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setResult(null);
                          setSelectedSymptoms([]);
                        }}
                      >
                        Check Again
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SymptomChecker;
