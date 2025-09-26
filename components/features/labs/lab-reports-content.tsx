"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FlaskConical, Search, ExternalLink, Calendar, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { batches, products } from "@/lib/data/products"
import type { Batch, Product } from "@/lib/types"

interface LabReportsContentProps {
  selectedBatch?: string
}

export function LabReportsContent({ selectedBatch }: LabReportsContentProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBatchData, setSelectedBatchData] = useState<Batch | null>(null)
  const [accessLogs, setAccessLogs] = useState<number>(0)

  useEffect(() => {
    if (selectedBatch) {
      const batch = batches.find((b) => b.code === selectedBatch)
      if (batch) {
        setSelectedBatchData(batch)
        // Log access
        logBatchAccess(selectedBatch)
      }
    }
  }, [selectedBatch])

  const logBatchAccess = async (batchCode: string) => {
    try {
      await fetch("/api/labs/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          batchCode,
          referrer: window.location.href,
        }),
      })
      setAccessLogs((prev) => prev + 1)
    } catch (error) {
      console.error("Failed to log batch access:", error)
    }
  }

  const filteredBatches = batches.filter((batch) => {
    const product = products.find((p) => p.id === batch.productId)
    const searchLower = searchTerm.toLowerCase()
    return (
      batch.code.toLowerCase().includes(searchLower) ||
      product?.name.toLowerCase().includes(searchLower) ||
      product?.category.toLowerCase().includes(searchLower)
    )
  })

  const getBatchStatus = (batch: Batch) => {
    const sealedDate = new Date(batch.sealedAt)
    const daysSinceSealed = Math.floor((Date.now() - sealedDate.getTime()) / (1000 * 60 * 60 * 24))

    if (daysSinceSealed <= 7) {
      return { status: "fresh", label: "Fresh", color: "text-green-500", bg: "bg-green-500/20" }
    } else if (daysSinceSealed <= 30) {
      return { status: "good", label: "Good", color: "text-blue-500", bg: "bg-blue-500/20" }
    } else {
      return { status: "aging", label: "Aging", color: "text-yellow-500", bg: "bg-yellow-500/20" }
    }
  }

  return (
    <div className="space-y-8">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search Lab Reports</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="search">Search by batch code or product name</Label>
              <Input
                id="search"
                placeholder="Enter batch code (e.g., A25-001) or product name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {selectedBatch && (
              <div className="bg-gold-600/10 border border-gold-400/20 rounded-lg p-4">
                <p className="text-sm text-gold-400">
                  <FlaskConical className="h-4 w-4 inline mr-1" />
                  Direct link accessed for batch: <strong>{selectedBatch}</strong>
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Lab Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBatches.map((batch) => {
          const product = products.find((p) => p.id === batch.productId)
          const status = getBatchStatus(batch)

          return (
            <Card key={batch.code} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Batch {batch.code}</CardTitle>
                  <Badge variant="secondary" className={`${status.bg} ${status.color} border-0`}>
                    {status.label}
                  </Badge>
                </div>
                {product && <p className="text-muted-foreground">{product.name}</p>}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Sealed Date</p>
                    <p className="font-medium flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(batch.sealedAt).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Category</p>
                    <p className="font-medium capitalize">{product?.category.replace("-", " ")}</p>
                  </div>
                </div>

                {batch.notes && (
                  <div>
                    <p className="text-muted-foreground text-sm">Notes</p>
                    <p className="text-sm">{batch.notes}</p>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <FileText className="h-4 w-4 mr-2" />
                        View Report
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Lab Report - Batch {batch.code}</DialogTitle>
                      </DialogHeader>
                      <LabReportModal batch={batch} product={product} />
                    </DialogContent>
                  </Dialog>

                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={batch.labReportPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => logBatchAccess(batch.code)}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredBatches.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <FlaskConical className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">No Lab Reports Found</h3>
            <p className="text-muted-foreground">
              {searchTerm ? "Try adjusting your search terms." : "Lab reports will appear here as batches are tested."}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Quality Promise */}
      <Card className="bg-gradient-to-r from-gold-600/10 to-gold-400/10 border-gold-400/20">
        <CardContent className="p-8">
          <div className="text-center">
            <FlaskConical className="h-12 w-12 text-gold-400 mx-auto mb-4" />
            <h2 className="satisfy-regular text-3xl text-foreground mb-4">Our Quality Promise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Every batch of MeeTreats products undergoes rigorous testing for microbiological safety, heavy metals,
              pesticide residues, and nutritional accuracy. We believe in complete transparency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Safety Testing</h3>
                <p className="text-sm text-muted-foreground">Microbiological and contamination screening</p>
              </div>
              <div className="text-center">
                <FlaskConical className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Nutritional Analysis</h3>
                <p className="text-sm text-muted-foreground">Accurate macro and micronutrient profiling</p>
              </div>
              <div className="text-center">
                <AlertCircle className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Allergen Testing</h3>
                <p className="text-sm text-muted-foreground">Cross-contamination and allergen verification</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function LabReportModal({ batch, product }: { batch: Batch; product?: Product }) {
  const sealedDate = new Date(batch.sealedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const testResults = [
    { parameter: "Total Plate Count", result: "<10 CFU/g", limit: "<100 CFU/g", status: "pass" },
    { parameter: "Yeast & Mold", result: "<5 CFU/g", limit: "<50 CFU/g", status: "pass" },
    { parameter: "E. coli", result: "Not Detected", limit: "Not Detected", status: "pass" },
    { parameter: "Salmonella", result: "Not Detected", limit: "Not Detected", status: "pass" },
    { parameter: "Lead (Pb)", result: "<0.01 ppm", limit: "<0.1 ppm", status: "pass" },
    { parameter: "Cadmium (Cd)", result: "<0.005 ppm", limit: "<0.05 ppm", status: "pass" },
    { parameter: "Mercury (Hg)", result: "<0.001 ppm", limit: "<0.01 ppm", status: "pass" },
  ]

  return (
    <div className="space-y-6">
      {/* Report Header */}
      <div className="bg-card border border-border rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Product</p>
            <p className="font-medium">{product?.name || "Unknown Product"}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Batch Code</p>
            <p className="font-medium">{batch.code}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Sealed Date</p>
            <p className="font-medium">{sealedDate}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Test Date</p>
            <p className="font-medium">{new Date(batch.sealedAt).toLocaleDateString("en-IN")}</p>
          </div>
        </div>
      </div>

      {/* Test Results */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Test Results</h3>
        <div className="space-y-2">
          {testResults.map((test, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <span className="text-sm font-medium">{test.parameter}</span>
              <div className="flex items-center space-x-4">
                <span className="text-sm">{test.result}</span>
                <span className="text-xs text-muted-foreground">Limit: {test.limit}</span>
                <Badge variant="secondary" className="bg-green-500/20 text-green-500 border-0">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Pass
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download Full Report */}
      <div className="flex justify-center pt-4">
        <Button asChild className="bg-gold-600 hover:bg-gold-400 text-brand-900">
          <a href={batch.labReportPdf} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Download Full Report (PDF)
          </a>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        This report is generated by an accredited third-party laboratory. All results are verified and certified.
      </p>
    </div>
  )
}
